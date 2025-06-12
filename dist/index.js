"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.merge = exports.obj = exports.diff = void 0;
const diff_1 = require("./diff");
Object.defineProperty(exports, "diff", { enumerable: true, get: function () { return diff_1.diff; } });
const merge_1 = require("./merge");
Object.defineProperty(exports, "merge", { enumerable: true, get: function () { return merge_1.merge; } });
const obj_1 = require("./obj");
Object.defineProperty(exports, "obj", { enumerable: true, get: function () { return obj_1.obj; } });
const pick_1 = require("./pick");
Object.defineProperty(exports, "pick", { enumerable: true, get: function () { return pick_1.pick; } });
const varize = { diff: diff_1.diff, obj: obj_1.obj, merge: merge_1.merge, pick: pick_1.pick };
exports.default = varize;
//# sourceMappingURL=index.js.map