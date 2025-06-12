import { CustomObject } from "../types/custom-object";
import { MergeArrays, MergeObject } from "../types/merge-types";

export function merge<T extends CustomObject[]>(...inputs: T): MergeObject<T>;
export function merge<T extends CustomObject[][]>(
  ...inputs: [...T]
): MergeArrays<T>;

export function merge<T extends CustomObject | never[]>(
  ...inputs: T[]
): T | T[] {
  if (Array.isArray(inputs[0]))
    return inputs.reduce((acc, item) => acc.concat(item as never[]), []) as T[];

  return inputs.reduce(
    (acc, item) => ({ ...acc, ...(item as CustomObject) }),
    {}
  ) as T;
}
