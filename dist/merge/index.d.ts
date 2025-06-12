import { CustomObject } from "../types/custom-object";
import { MergeArrays, MergeObject } from "../types/merge-types";
export declare function merge<T extends CustomObject[]>(...inputs: T): MergeObject<T>;
export declare function merge<T extends CustomObject[][]>(...inputs: [...T]): MergeArrays<T>;
//# sourceMappingURL=index.d.ts.map