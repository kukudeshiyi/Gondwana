#include<iostream>
auto a {1};
int main(){
  auto a {2};
  std::cout<< ::a << std::endl;
}