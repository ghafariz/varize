"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diff = void 0;
function diff(rawObj1, rawObj2) {
    const isObj1Array = Array.isArray(rawObj1);
    const isObj2Array = Array.isArray(rawObj2);
    if ((isObj1Array && !isObj2Array) || (!isObj1Array && isObj2Array))
        return false;
    if (isObj1Array && isObj2Array) {
        const filter = (filterArr, compareArr) => filterArr.filter((filterItem) => !compareArr.some((compareItem) => {
            const result = diff(filterItem, compareItem);
            return ((typeof result === "boolean" && result) ||
                (typeof result === "object" && result.equal));
        }));
        const notOnArr1 = filter(rawObj2, rawObj1);
        const notOnArr2 = filter(rawObj1, rawObj2);
        return {
            equal: notOnArr1.length === 0 && notOnArr2.length === 0,
            notOnArr1,
            notOnArr2,
        };
    }
    if (typeof rawObj1 !== "object" ||
        rawObj1 === null ||
        typeof rawObj2 !== "object" ||
        rawObj2 === null)
        return rawObj1 === rawObj2;
    const obj1 = rawObj1;
    const obj2 = rawObj2;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length)
        return false;
    for (const key of keys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];
        if (value1 instanceof Date || value2 instanceof Date) {
            if (!(value1 instanceof Date &&
                value2 instanceof Date &&
                value1.getTime() === value2.getTime()))
                return false;
            continue;
        }
        if (!diff(value1, value2))
            return false;
    }
    return true;
}
exports.diff = diff;
//# sourceMappingURL=index.js.map