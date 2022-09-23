//  Invert Keys and Properties of an Object
const invert = obj => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

invert({ a: 1, b: 2 });
