export declare function pick<T, K extends keyof T>(data: Array<T>, keys: K, option?: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty?: false | undefined;
}): Array<T[K]>;
export declare function pick<T, K extends keyof T>(data: Array<T>, keys: K, option: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty: true;
}): Array<NonNullable<T[K]>>;
export declare function pick<T, K extends keyof T, F extends (value: T[K], key: K) => unknown>(data: Array<T>, keys: K, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty?: false | undefined;
}): Array<ReturnType<F>>;
export declare function pick<T, K extends keyof T, F extends (value: NonNullable<T[K]>, key: K) => unknown>(data: Array<T>, keys: K, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty: true;
}): Array<ReturnType<F>>;
export declare function pick<T, K extends keyof T, F extends ((value: T[K]) => unknown) | undefined>(data: Array<T>, keys: K, option: {
    formatter?: F;
    joiner: string;
    unique?: boolean;
    mode?: undefined;
    nonEmpty?: false | undefined;
}): string;
export declare function pick<T, K extends keyof T, F extends ((value: NonNullable<T[K]>, key: K) => unknown) | undefined>(data: Array<T>, keys: K, option: {
    formatter?: F;
    joiner: string;
    unique?: boolean;
    mode?: undefined;
    nonEmpty: true;
}): string;
export declare function pick<T, K extends keyof T>(data: Array<T>, keys: Array<K>, option?: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty?: false | undefined;
}): Array<{
    [key in K]: T[key];
}>;
export declare function pick<T, K extends keyof T>(data: Array<T>, keys: Array<K>, option: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty: true;
}): Array<{
    [key in K]: NonNullable<T[key]>;
}>;
export declare function pick<T, K extends keyof T, F extends (value: T[K], key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty?: false | undefined;
}): Array<{
    [key in K]: ReturnType<F>;
}>;
export declare function pick<T, K extends keyof T, F extends (value: NonNullable<T[K]>, key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode?: undefined;
    nonEmpty: true;
}): Array<{
    [key in K]: ReturnType<F>;
}>;
export declare function pick<T, K extends keyof T>(data: Array<T>, keys: Array<K>, option: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode: "field-array";
    nonEmpty?: false | undefined;
}): {
    [key in K]: Array<T[key]>;
};
export declare function pick<T, K extends keyof T>(data: Array<T>, keys: Array<K>, option: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode: "field-array";
    nonEmpty: true;
}): {
    [key in K]: Array<NonNullable<T[key]>>;
};
export declare function pick<T, K extends keyof T, F extends (value: T[K], key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode: "field-array";
    nonEmpty?: false | undefined;
}): {
    [key in K]: Array<ReturnType<F>>;
};
export declare function pick<T, K extends keyof T, F extends (value: NonNullable<T[K]>, key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode: "field-array";
    nonEmpty: true;
}): {
    [key in K]: Array<ReturnType<F>>;
};
export declare function pick<T, K extends keyof T, F extends (value: T[K], key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter?: F;
    joiner: string;
    unique?: boolean;
    mode: "field-array";
    nonEmpty?: false | undefined;
}): {
    [key in K]: string;
};
export declare function pick<T, K extends keyof T, F extends (value: NonNullable<T[K]>, key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter?: F;
    joiner: string;
    unique?: boolean;
    mode: "field-array";
    nonEmpty: true;
}): {
    [key in K]: string;
};
export declare function pick<T, K extends keyof T, KS extends Array<K>>(data: Array<T>, keys: [...KS], option: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode: "nested-array";
    nonEmpty?: false | undefined;
}): {
    [P in keyof KS]: Array<T[KS[P]]>;
};
export declare function pick<T, K extends keyof T, KS extends Array<K>>(data: Array<T>, keys: [...KS], option: {
    formatter?: undefined;
    joiner?: undefined;
    unique?: boolean;
    mode: "nested-array";
    nonEmpty: true;
}): {
    [P in keyof KS]: Array<NonNullable<T[KS[P]]>>;
};
export declare function pick<T, K extends keyof T, KS extends Array<K>, F extends (value: T[K], key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode: "nested-array";
    nonEmpty?: false | undefined;
}): {
    [P in keyof KS]: Array<ReturnType<F>>;
};
export declare function pick<T, K extends keyof T, KS extends Array<K>, F extends (value: NonNullable<T[K]>, key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter: F;
    joiner?: undefined;
    unique?: boolean;
    mode: "nested-array";
    nonEmpty: true;
}): {
    [P in keyof KS]: Array<ReturnType<F>>;
};
export declare function pick<T, K extends keyof T, KS extends Array<K>, F extends (value: T[K], key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter?: F;
    joiner: string;
    unique?: boolean;
    mode: "nested-array";
    nonEmpty?: false | undefined;
}): {
    [P in keyof KS]: string;
};
export declare function pick<T, K extends keyof T, KS extends Array<K>, F extends (value: NonNullable<T[K]>, key: K) => unknown>(data: Array<T>, keys: Array<K>, option: {
    formatter?: F;
    joiner: string;
    unique?: boolean;
    mode: "nested-array";
    nonEmpty: true;
}): {
    [P in keyof KS]: string;
};
//# sourceMappingURL=index.d.ts.map