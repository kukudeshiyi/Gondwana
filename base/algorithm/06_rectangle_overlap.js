// 矩形重叠

function isRectangleOverlap(rec1, rec2) {
  // 解法一
  // if(rec1[2] > rec2[2] && rec1[3] > rec2[3]){
  //     if(rec1[0] < rec2[2] && rec1[1] < rec2[3]){
  //         return true;
  //     }
  // }else{
  //     if(rec2[0] < rec1[2] && rec2[1] < rec1[3]){
  //         return true;
  //     }
  // }
  // return false;

  // 解法二 投影，二维变一维
  const x_overlap = !(rec1[2] <= rec2[0] || rec2[2] <= rec1[0]);
  const y_overlap = !(rec1[3] <= rec2[1] || rec2[3] <= rec1[1]);
  return x_overlap && y_overlap;
}
