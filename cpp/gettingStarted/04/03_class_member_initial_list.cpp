#include<iostream>
#include "Matrix.hpp"

// member initial list 主要用于将参数传递给 member class object 的 constructor

int main(){
  Matrix m( "test", 5, 6 );
  std::cout << m._name << std::endl;
  Matrix m1 ( m );
  std::cout << m1._name << std::endl;
  return 0;
}