"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj_1 = require("./obj");
const rawData = [
    {
        name: "John",
        age: 12,
        info: {
            address: "gubeng",
            number: 1532,
        },
        birthDate: new Date("2025-01-01"),
    },
    {
        name: "Doe",
        age: 40,
        info: {
            address: "dharmahusada",
            number: 1532,
        },
        birthDate: new Date("2025-03-01"),
    },
    {
        name: "Doe",
        age: 40,
        info: {
            address: "kertajaya",
            number: 755,
        },
        birthDate: new Date("2025-03-01"),
    },
];
const data = (0, obj_1.obj)(rawData, "info.number", {
    formatter: (val) => val.info,
    grouping: true,
});
console.log(data);
//# sourceMappingURL=test.js.map