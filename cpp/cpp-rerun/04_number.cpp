#include<iostream>
#include<math.h>
#include<limits>

int main(){
  double a{3.14};
  std::cout << std::abs(a) << std::endl
    << floor(a) << std::endl
    << ceil(a) << std::endl
    << round(a) << std::endl;
  std::cout << std::numeric_limits<int>::max() << std::endl
    << INT16_MAX << std::endl
    << INT32_MAX << std::endl
    << INT64_MAX << std::endl;
  return 0;
}