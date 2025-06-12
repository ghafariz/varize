import { CustomObject } from "./custom-object";

export type MergeObject<T extends CustomObject[]> = T extends [
  infer First,
  ...infer Rest
]
  ? First & MergeObject<Extract<Rest, CustomObject[]>>
  : unknown;

export type MergeArrays<T extends CustomObject[][]> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends CustomObject[]
    ? First extends Rest[number]
      ? MergeArrays<Extract<Rest, CustomObject[][]>>
      : First | MergeArrays<Extract<Rest, CustomObject[][]>>
    : never
  : never;
