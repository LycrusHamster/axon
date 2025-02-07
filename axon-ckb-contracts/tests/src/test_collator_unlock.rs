use crate::common::*;
use crate::environment_builder::{AxonScripts, EnvironmentBuilder};
use crate::secp256k1::*;
use ckb_tool::ckb_crypto::secp::Generator;
use ckb_tool::ckb_types::{bytes::Bytes, packed::CellDep, prelude::*};

use common_raw::{
    cell::{
        sidechain_bond::{SidechainBondCell, SidechainBondCellLockArgs},
        sidechain_state::{SidechainStateCell, SidechainStateCellTypeArgs},
        sudt_token::SudtTokenCell,
    },
    witness::collator_unlock_bond::CollatorUnlockBondWitness,
};

const MAX_CYCLES: u64 = 10_000_000;

#[test]
fn test_success() {
    // generate key pair
    let privkey = Generator::random_privkey();
    let pubkey = privkey.pubkey().expect("pubkey");
    let pubkey_hash = blake160(&pubkey.serialize());

    // deploy contract
    let (
        mut builder,
        AxonScripts {
            always_success_code,
            always_success_script: always_success,
            code_cell_script,
            ..
        },
    ) = EnvironmentBuilder::default().bootstrap(pubkey_hash.to_vec());

    // prepare scripts
    let mut sidechain_bond_lock_args = SidechainBondCellLockArgs::default();
    sidechain_bond_lock_args.collator_lock_arg.copy_from_slice(&pubkey_hash);

    let sidechain_bond_lock_input_script = builder
        .context
        .build_script(&always_success_code, sidechain_bond_lock_args.serialize())
        .expect("script");

    let state_dep_type_args = SidechainStateCellTypeArgs::default();
    let state_dep_script = builder
        .context
        .build_script(&always_success_code, state_dep_type_args.serialize())
        .expect("script");

    // prepare cell deps
    let state_dep_data = SidechainStateCell::default();
    let state_dep_out_point = builder.context.create_cell(
        new_type_cell_output(1000, &always_success, &state_dep_script),
        state_dep_data.serialize(),
    );
    let state_dep = CellDep::new_builder().out_point(state_dep_out_point).build();

    let mut builder = builder.cell_dep(state_dep);

    // prepare inputs
    let sidechain_bond_input_data = SidechainBondCell::default();
    let sidechain_bond_input = builder.create_input(
        new_type_cell_output(1000, &sidechain_bond_lock_input_script, &always_success),
        sidechain_bond_input_data.serialize(),
    );

    let builder = builder.input(sidechain_bond_input);

    // prepare outputs
    let sudt_output = SudtTokenCell::default();
    let outputs = vec![
        new_type_cell_output(1000, &always_success, &code_cell_script),
        new_type_cell_output(1000, &always_success, &always_success),
    ];
    let outputs_data: Vec<Bytes> = vec![Bytes::new(), sudt_output.serialize()];

    let mut witness = CollatorUnlockBondWitness::default();
    witness.sidechain_state_dep_index = EnvironmentBuilder::BOOTSTRAP_CELL_DEPS_LENGTH;

    let witnesses = [get_dummy_witness_builder().input_type(witness.serialize().pack_some()).as_bytes()];

    // build transaction
    let builder = builder.outputs(outputs).outputs_data(outputs_data.pack());
    let tx = builder.builder.build();
    let tx = tx
        .as_advanced_builder()
        .set_witnesses(sign_tx_with_witnesses(tx, witnesses.pack(), &privkey).unwrap())
        .build();

    // run
    builder.context.verify_tx(&tx, MAX_CYCLES).expect("pass verification");
}
