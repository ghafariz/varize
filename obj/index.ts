type NestedKey<T> = {
  [K in keyof T & (string | number)]: T[K] extends
    | string
    | number
    | boolean
    | symbol
    | null
    | undefined
    ? `${K}`
    : T[K] extends object
    ? `${K}` | `${K}.${NestedKey<T[K]>}`
    : never;
}[keyof T & (string | number)];

type NestedValue<T, P extends string> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? NestedValue<T[K], Rest>
    : never
  : P extends keyof T
  ? T[P]
  : never;

type ValidRecordKey<T> = T extends string | number | symbol ? T : never;

type KeyFunc<T> = (val: T) => string | number;

const getNestedValue = <T, K extends NestedKey<T>>(
  obj: T,
  key: K,
): ValidRecordKey<NestedValue<T, K>> =>
  (key as string)
    .split('.')
    .reduce(
      (acc, key) => (acc && typeof acc === 'object' ? acc[key as keyof typeof acc] : undefined),
      obj as any,
    ) as ValidRecordKey<NestedValue<T, K>>;

const isRecord = (value: any): value is Record<string | number | symbol, any> =>
  typeof value === 'object' &&
  value !== null &&
  !Array.isArray(value) &&
  !(value instanceof Date) &&
  !(value instanceof RegExp) &&
  !(value instanceof Map) &&
  !(value instanceof Set) &&
  !(value instanceof WeakMap) &&
  !(value instanceof WeakSet);

export function obj<T, K extends NestedKey<T>>(
  array: T[],
  key: K,
): Record<ValidRecordKey<NestedValue<T, K>>, T>;

export function obj<T, K extends KeyFunc<T>>(array: T[], key: K): Record<ReturnType<K>, T>;

export function obj<T, K extends NestedKey<T>, F extends (value: T) => unknown>(
  array: T[],
  key: K,
  option: {
    formatter?: undefined;
    grouping?: false | undefined;
  },
): Record<ValidRecordKey<NestedValue<T, K>>, ReturnType<F>>;

export function obj<T, K extends KeyFunc<T>, F extends (value: T) => unknown>(
  array: T[],
  key: K,
  option: {
    formatter?: undefined;
    grouping?: false | undefined;
  },
): Record<ReturnType<K>, ReturnType<F>>;

export function obj<T, K extends NestedKey<T>, F extends (value: T) => unknown>(
  array: T[],
  key: K,
  option: {
    formatter: F;
    grouping?: false | undefined;
  },
): Record<ValidRecordKey<NestedValue<T, K>>, ReturnType<F>>;

export function obj<T, K extends KeyFunc<T>, F extends (value: T) => unknown>(
  array: T[],
  key: K,
  option: {
    formatter: F;
    grouping?: false | undefined;
  },
): Record<ReturnType<K>, ReturnType<F>>;

export function obj<T, K extends NestedKey<T>>(
  array: T[],
  key: K,
  option: {
    formatter?: undefined;
    grouping: true;
  },
): Record<ValidRecordKey<NestedValue<T, K>>, Array<T>>;

export function obj<T, K extends KeyFunc<T>>(
  array: T[],
  key: K,
  option: {
    formatter?: undefined;
    grouping: true;
  },
): Record<ReturnType<K>, Array<T>>;

export function obj<T, K extends NestedKey<T>, F extends (value: T) => unknown>(
  array: T[],
  key: K,
  option: {
    formatter: F;
    grouping: true;
  },
): Record<ValidRecordKey<NestedValue<T, K>>, Array<ReturnType<F>>>;

export function obj<T, K extends KeyFunc<T>, F extends (value: T) => unknown>(
  array: T[],
  key: K,
  option: {
    formatter: F;
    grouping: true;
  },
): Record<ReturnType<K>, Array<ReturnType<F>>>;

export function obj<
  T,
  K extends NestedKey<T> | KeyFunc<T>,
  F extends (value: T) => unknown,
  R extends T | ReturnType<F>,
>(array: T[], key: K, option?: { formatter?: F; grouping?: boolean }) {
  const record: Record<string | number, R | Array<R>> = {};

  array.forEach((item) => {
    const thisKey =
      typeof key === 'function' ? key(item) : getNestedValue(item, key as NestedKey<T>);
    const val = (option?.formatter !== undefined ? option.formatter(item) : item) as R | Array<R>;
    if (option?.grouping)
      record[thisKey as string] = [...((record[thisKey as string] ?? []) as Array<R>), val] as
        | R
        | Array<R>;
    else
      record[thisKey as string] = !isRecord(val)
        ? val
        : { ...(record[thisKey as string] ?? {}), ...val };
  });

  return record;
}
