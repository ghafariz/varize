type Primitive = string | number | boolean | symbol | null | undefined;
export type NestedKey<T> = {
    [K in keyof T & (string | number)]: T[K] extends Primitive ? `${K}` : T[K] extends object ? `${K}` | `${K}.${NestedKey<T[K]>}` : never;
}[keyof T & (string | number)];
export type NestedValue<T, P extends string> = P extends `${infer K}.${infer Rest}` ? K extends keyof T ? NestedValue<T[K], Rest> : never : P extends keyof T ? T[P] : never;
type ValidRecordKey<T> = T extends string | number | symbol ? T : never;
export declare function obj<T, K extends NestedKey<T>>(array: T[], key: K): Record<ValidRecordKey<NestedValue<T, K>>, T>;
export declare function obj<T, K extends NestedKey<T>, F extends (value: T) => unknown>(array: T[], key: K, option: {
    formatter?: undefined;
    grouping?: false | undefined;
}): Record<ValidRecordKey<NestedValue<T, K>>, ReturnType<F>>;
export declare function obj<T, K extends NestedKey<T>, F extends (value: T) => unknown>(array: T[], key: K, option: {
    formatter: F;
    grouping?: false | undefined;
}): Record<ValidRecordKey<NestedValue<T, K>>, ReturnType<F>>;
export declare function obj<T, K extends NestedKey<T>>(array: T[], key: K, option: {
    formatter?: undefined;
    grouping: true;
}): Record<ValidRecordKey<NestedValue<T, K>>, Array<T>>;
export declare function obj<T, K extends NestedKey<T>, F extends (value: T) => unknown>(array: T[], key: K, option: {
    formatter: F;
    grouping: true;
}): Record<ValidRecordKey<NestedValue<T, K>>, Array<ReturnType<F>>>;
export {};
//# sourceMappingURL=index.d.ts.map