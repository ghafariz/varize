"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
// Function implementation
function pick(data, keys, option) {
    const result = option?.mode === "field-array" ? {} : [];
    const multipleKeys = Array.isArray(keys);
    const formatValue = (value, key) => {
        if (option?.formatter)
            return option.formatter(value, key);
        return value;
    };
    const validateValue = (item) => !option?.nonEmpty ||
        (option?.nonEmpty && item !== null && item !== undefined);
    const pushToList = (list, item, key) => {
        if (!validateValue(item))
            return;
        const formatted = formatValue(item, key);
        if (option?.unique && list.includes(formatted))
            return;
        list.push(formatted);
    };
    if (option?.mode === "nested-array" && multipleKeys)
        keys.forEach((key) => {
            const temp = [];
            data.forEach((item) => pushToList(temp, item[key], key));
            result.push(temp);
        });
    else {
        data.forEach((item) => {
            if (!multipleKeys)
                return pushToList(result, item[keys], keys);
            if (!Array.isArray(result)) {
                if (option?.mode === "field-array")
                    keys.forEach((rawKey) => {
                        const key = rawKey;
                        result[key] = result[key] ?? [];
                        pushToList(result[key], item[rawKey], rawKey);
                    });
                return;
            }
            const temp = {};
            keys.forEach((key) => {
                if (validateValue(item[key]))
                    temp[key] = formatValue(item[key], key);
            });
            result.push(temp);
        });
    }
    if (!option?.joiner)
        return result;
    if (option.mode === "nested-array" && Array.isArray(result))
        return result.map((r) => r.join(option.joiner));
    if (option.mode === "field-array" && !Array.isArray(result)) {
        Object.keys(result).forEach((key) => (result[key] = result[key].join(option.joiner)));
        return result;
    }
    return result.join(option.joiner);
}
exports.pick = pick;
//# sourceMappingURL=index.js.map