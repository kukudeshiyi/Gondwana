let count = 1;

function setCount(val) {
  count = val;
}

exports.count = count;
exports.setCount = setCount;
exports.c = function () {
  console.log("love u");
};

// module.exports = {
//   count,
//   setCount,
// };
