const str1 = "123213123";

// str[1] = 9; // 会报错

console.log("str1", str1.charAt(0), str1[0]);
console.log("str2", "A" < "a"); // 根据 ASCII 来比较大小
const strObj = new String("test");
console.log("str3", typeof strObj, "2+2".valueOf(), eval("2+2")); // object 2+2 4

const str3 = "\\";
console.log("str4", str3);
console.log("str5", "happy".repeat(4));
console.log("str6", "happy".includes("p"));
console.log("str7", "happy".includes("p"));
console.log("str8", "happy".slice(2, -1));
