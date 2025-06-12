type CustomObject = Record<string | number | symbol, unknown>;

type MergeObject<T extends CustomObject[]> = T extends [infer First, ...infer Rest]
  ? First & MergeObject<Extract<Rest, CustomObject[]>>
  : unknown;

type MergeArrays<T extends CustomObject[][]> = T extends [infer First, ...infer Rest]
  ? First extends CustomObject[]
    ? First extends Rest[number]
      ? MergeArrays<Extract<Rest, CustomObject[][]>>
      : First | MergeArrays<Extract<Rest, CustomObject[][]>>
    : never
  : never;

export function merge<T extends CustomObject[]>(...inputs: T): MergeObject<T>;

export function merge<T extends CustomObject[][]>(...inputs: [...T]): MergeArrays<T>;

export function merge<T extends CustomObject | never[]>(...inputs: T[]): T | T[] {
  if (Array.isArray(inputs[0]))
    return inputs.reduce((acc, item) => acc.concat(item as never[]), []) as T[];

  return inputs.reduce((acc, item) => ({ ...acc, ...(item as CustomObject) }), {}) as T;
}
