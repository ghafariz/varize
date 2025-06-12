import { obj } from "./obj";

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

const data = obj(rawData, "info.number", {
  formatter: (val) => val.info,
  grouping: true,
});

console.log(data);
