type CustomObject = Record<string | number | symbol, unknown>;

type ArrayResponse<T1 extends InputType, T2 extends InputType> = {
  equal: boolean;
  notOnArr1: T2[];
  notOnArr2: T1[];
};

type BasicType = string | number | bigint | boolean | symbol | undefined | CustomObject;

type InputType = BasicType | Array<InputType>;

export function diff(obj1: BasicType, obj2: BasicType): boolean;

export function diff<T1 extends BasicType, T2 extends BasicType>(
  arr1: Array<T1>,
  arr2: Array<T2>,
): ArrayResponse<T1, T2>;

export function diff<T1 extends InputType, T2 extends InputType>(
  rawObj1: InputType,
  rawObj2: InputType,
): boolean | ArrayResponse<T1, T2> {
  const isObj1Array = Array.isArray(rawObj1);
  const isObj2Array = Array.isArray(rawObj2);

  if ((isObj1Array && !isObj2Array) || (!isObj1Array && isObj2Array)) return false;

  if (isObj1Array && isObj2Array) {
    const filter = (filterArr: any[], compareArr: any[]): any[] =>
      filterArr.filter(
        (filterItem) =>
          !compareArr.some((compareItem) => {
            const result = diff(filterItem, compareItem) as boolean | ArrayResponse<T1, T2>;
            return (
              (typeof result === 'boolean' && result) ||
              (typeof result === 'object' && result.equal)
            );
          }),
      );

    const notOnArr1 = filter(rawObj2, rawObj1);
    const notOnArr2 = filter(rawObj1, rawObj2);

    return {
      equal: notOnArr1.length === 0 && notOnArr2.length === 0,
      notOnArr1,
      notOnArr2,
    };
  }

  if (
    typeof rawObj1 !== 'object' ||
    rawObj1 === null ||
    typeof rawObj2 !== 'object' ||
    rawObj2 === null
  )
    return rawObj1 === rawObj2;

  const obj1 = rawObj1 as unknown as CustomObject;
  const obj2 = rawObj2 as unknown as CustomObject;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (value1 instanceof Date || value2 instanceof Date) {
      if (
        !(value1 instanceof Date && value2 instanceof Date && value1.getTime() === value2.getTime())
      )
        return false;
      continue;
    }

    if (!diff(value1 as any, value2 as any)) return false;
  }

  return true;
}
