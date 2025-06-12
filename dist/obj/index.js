"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = void 0;
const getNestedValue = (obj, key) => key
    .split(".")
    .reduce((acc, key) => acc && typeof acc === "object"
    ? acc[key]
    : undefined, obj);
const isRecord = (value) => typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Date) &&
    !(value instanceof RegExp) &&
    !(value instanceof Map) &&
    !(value instanceof Set) &&
    !(value instanceof WeakMap) &&
    !(value instanceof WeakSet);
function obj(array, key, option) {
    const record = {};
    array.forEach((item) => {
        const thisKey = getNestedValue(item, key);
        const val = (option?.formatter !== undefined ? option.formatter(item) : item);
        if (option?.grouping)
            record[thisKey] = [
                ...(record[thisKey] ?? []),
                val,
            ];
        else
            record[thisKey] = !isRecord(val)
                ? val
                : { ...(record[thisKey] ?? {}), ...val };
    });
    return record;
}
exports.obj = obj;
//# sourceMappingURL=index.js.map