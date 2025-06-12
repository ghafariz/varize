"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = void 0;
function merge(...inputs) {
    if (Array.isArray(inputs[0]))
        return inputs.reduce((acc, item) => acc.concat(item), []);
    return inputs.reduce((acc, item) => ({ ...acc, ...item }), {});
}
exports.merge = merge;
//# sourceMappingURL=index.js.map