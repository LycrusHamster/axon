export interface CastToArrayBuffer {
  toArrayBuffer(): ArrayBuffer;
}

export type CanCastToArrayBuffer = ArrayBuffer | CastToArrayBuffer;

export interface CreateOptions {
  validate?: boolean;
}

export interface UnionType {
  type: string;
  value: any;
}

export function SerializeTaskMode(value: CanCastToArrayBuffer): ArrayBuffer;
export class TaskMode {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeTaskStatus(value: CanCastToArrayBuffer): ArrayBuffer;
export class TaskStatus {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeSidechainBlockHeaders(value: Array<CanCastToArrayBuffer>): ArrayBuffer;
export class SidechainBlockHeaders {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): BlockHeader;
  length(): number;
}

export function SerializeTaskCell(value: object): ArrayBuffer;
export class TaskCell {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  getVersion(): Uint8;
  getSidechainBlockHeightFrom(): BlockHeight;
  getSidechainBlockHeightTo(): BlockHeight;
  getRefreshSidechainHeight(): BlockHeight;
  getCheckDataSize(): Uint128;
  getMode(): TaskMode;
  getStatus(): TaskStatus;
  getReveal(): RandomSeed;
  getCommit(): CommittedHash;
  getSidechainBlockHeader(): SidechainBlockHeaders;
}

export function SerializeTaskCellTypeArgs(value: object): ArrayBuffer;
export class TaskCellTypeArgs {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  static size(): number;
  getChainId(): ChainId;
  getCheckerLockArg(): PubKeyHash;
}

export function SerializeUint8(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint8 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeUint16(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint16 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  toBigEndianUint16(): number;
  toLittleEndianUint16(): number;
  static size(): number;
}

export function SerializeUint32(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint32 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  toBigEndianUint32(): number;
  toLittleEndianUint32(): number;
  static size(): number;
}

export function SerializeUint64(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint64 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  toBigEndianBigUint64(): bigint;
  toLittleEndianBigUint64(): bigint;
  static size(): number;
}

export function SerializeUint128(value: CanCastToArrayBuffer): ArrayBuffer;
export class Uint128 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeBytes16(value: CanCastToArrayBuffer): ArrayBuffer;
export class Bytes16 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeBytes32(value: CanCastToArrayBuffer): ArrayBuffer;
export class Bytes32 {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeBlockHeader(value: CanCastToArrayBuffer): ArrayBuffer;
export class BlockHeader {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeBlockHeight(value: CanCastToArrayBuffer): ArrayBuffer;
export class BlockHeight {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeCodeHash(value: CanCastToArrayBuffer): ArrayBuffer;
export class CodeHash {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeHashType(value: CanCastToArrayBuffer): ArrayBuffer;
export class HashType {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeMerkleHash(value: CanCastToArrayBuffer): ArrayBuffer;
export class MerkleHash {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializePubKeyHash(value: CanCastToArrayBuffer): ArrayBuffer;
export class PubKeyHash {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeScriptHash(value: CanCastToArrayBuffer): ArrayBuffer;
export class ScriptHash {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeBlockSlice(value: object): ArrayBuffer;
export class BlockSlice {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  static size(): number;
  getFrom(): BlockHeight;
  getTo(): BlockHeight;
}

export function SerializeChainId(value: CanCastToArrayBuffer): ArrayBuffer;
export class ChainId {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  toBigEndianUint32(): number;
  toLittleEndianUint32(): number;
  static size(): number;
}

export function SerializeChainIdList(value: Array<CanCastToArrayBuffer>): ArrayBuffer;
export class ChainIdList {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): ChainId;
  length(): number;
}

export function SerializeRandomSeed(value: CanCastToArrayBuffer): ArrayBuffer;
export class RandomSeed {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeCommittedHash(value: CanCastToArrayBuffer): ArrayBuffer;
export class CommittedHash {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  static size(): number;
}

export function SerializeMolString(value: CanCastToArrayBuffer): ArrayBuffer;
export class MolString {
  constructor(reader: CanCastToArrayBuffer, options?: CreateOptions);
  validate(compatible?: boolean): void;
  indexAt(i: number): number;
  raw(): ArrayBuffer;
  length(): number;
}
