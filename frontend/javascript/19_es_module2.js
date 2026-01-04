import { count, setCount, a } from "./19_es_module.js";

console.log("count", count, a);
setCount(890);
a.ui = 345;
console.log("count", count, a); // all changed
