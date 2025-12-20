#include<iostream>
#include<vector>

template <typename T>
T getLargestNumber(const std::vector<T>& vec){
  T largestNumber { vec.at(0) };
  for (auto& val: vec){
    if(val > largestNumber) largestNumber = val;
  }
  return largestNumber;
}

int main(){
  std::vector<int> vec1 {1,2,3};
  std::vector<double> vec2 {1.1,2.2,3.3};
  auto res1 = getLargestNumber(vec1);
  auto res2 = getLargestNumber(vec2);
  std::cout << res1 << " " << res2 << std::endl;
}