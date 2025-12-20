#include<iostream>
void test(){
  static auto a{1};
  std::cout << a << std::endl;
	a = a + 1;
}

int main(){
  test();
  test();
  return 0;
}