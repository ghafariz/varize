import { CustomObject } from "../types/custom-object";
type ArrayResponse<T1 extends InputType, T2 extends InputType> = {
    equal: boolean;
    notOnArr1: T2[];
    notOnArr2: T1[];
};
type BasicType = string | number | bigint | boolean | symbol | undefined | CustomObject;
type InputType = BasicType | Array<InputType>;
export declare function diff(obj1: BasicType, obj2: BasicType): boolean;
export declare function diff<T1 extends BasicType, T2 extends BasicType>(arr1: Array<T1>, arr2: Array<T2>): ArrayResponse<T1, T2>;
export {};
//# sourceMappingURL=index.d.ts.map