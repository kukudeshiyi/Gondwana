// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]

// const nums1 = [1, 2, 3];
// const nums2 = [2, 5, 6];

const nums1 = [3, 4, 5];
const nums2 = [1, 2];

// function runStack(n) {
//   if (n === 0) return 100;
//   return runStack(n - 2);
// }
// runStack(50000);

// function runStack(n, result = 100) {
//   if (n === 0) return result;
//   return runStack(n - 2, result);
// }

// let userInfo = {
//   name: "jack.ma",
//   age: 13,
//   sex: "male",
//   updateInfo: function () {
//     // 模拟 xmlhttprequest 请求延时
//     setTimeout(
//       function (self) {
//         console.log(self);
//         self.name = "pony.ma";
//         self.age = 39;
//         self.sex = "female";
//         console.log(self);
//       },
//       100,
//       this
//     );
//   },
// };

let userInfo = {
  name: "jack.ma",
  age: 13,
  sex: "male",
  updateInfo: function () {
    // 模拟 xmlhttprequest 请求延时
    setTimeout(() => {
      this.name = "pony.ma";
      this.age = 39;
      this.sex = "female";
      console.log(this);
    }, 100);
  },
};

userInfo.updateInfo();

const a = userInfo.updateInfo;

a();

/**
 * a, b, c
 * a + b
 * a + b + c + b
 * 2(a+b) = a + 2b + c
 * 2a  + 2b = a + 2b + c
 * a = c
 */
