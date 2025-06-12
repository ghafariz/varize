# 📦 Varize

A collection of **utility functions** for advanced data transformation and object manipulation in TypeScript, focused on immutability, type safety, and performance.

---

## ✨ Features

- 🔍 Deep object and array diffing
- 🔗 Smart object merging
- 🧠 Nested object key/value extraction
- 📊 Key-based object mapping with optional grouping/formatting
- 🎯 Flexible data picking with advanced modes (`field-array`, `nested-array`, `join`, etc.)
- 🔒 Fully typed and type-safe for both strict and complex use cases

---

## 📁 Installation

```bash
npm install varize
# or
yarn add varize
```

---

## 📘 Usage Overview

### 1. `diff` — Deep Comparison of Objects or Arrays

```ts
import { diff } from 'varize';

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
console.log(diff(obj1, obj2)); // true

const arr1 = [{ id: 1 }, { id: 2 }];
const arr2 = [{ id: 1 }, { id: 3 }];
console.log(diff(arr1, arr2));
// { equal: false, notOnArr1: [{ id: 3 }], notOnArr2: [{ id: 2 }] }
```

---

### 2. `merge` — Merge Multiple Objects or Arrays

```ts
import { merge } from 'varize';

const mergedObject = merge({ a: 1 }, { b: 2 });
// => { a: 1, b: 2 }

const mergedArray = merge([1, 2], [3, 4]);
// => [1, 2, 3, 4]
```

---

### 3. `obj` — Convert Array to Object by Key

```ts
import { obj } from 'varize';

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const byId = obj(users, 'id');
/*
{
  1: { id: 1, name: "Alice" },
  2: { id: 2, name: "Bob" }
}
*/

const grouped = obj(users, 'name', { grouping: true });
/*
{
  Alice: [{ id: 1, name: "Alice" }],
  Bob: [{ id: 2, name: "Bob" }]
}
*/
```

---

### 4. `pick` — Extract Values by Keys (with advanced options)

```ts
import { pick } from 'varize';

const data = [
  { id: 1, name: 'A', age: 20 },
  { id: 2, name: 'B', age: 30 },
  { id: 3, name: 'C', age: 40 },
];

// Simple key
pick(data, 'name');
// => ["A", "B", "C"]

// Join names
pick(data, 'name', { joiner: ', ' });
// => "A, B, C"

// Multiple keys
pick(data, ['name', 'age']);
/*
[
  { name: "A", age: 20 },
  { name: "B", age: 30 },
  { name: "C", age: 40 }
]
*/

// Field-array mode
pick(data, ['name', 'age'], { mode: 'field-array' });
/*
{
  name: ["A", "B", "C"],
  age: [20, 30, 40]
}
*/

// Nested-array mode
pick(data, ['name', 'age'], { mode: 'nested-array' });
/*
[
  ["A", "B", "C"],
  [20, 30, 40]
]
*/
```

---

## 🧪 Type Safety

All utilities are fully typed and support advanced type inference for deep nested objects and conditional configurations. Your IDE will help you avoid incorrect usage.

---

## 📄 License

MIT © [ghafariz](https://github.com/ghafariz)
