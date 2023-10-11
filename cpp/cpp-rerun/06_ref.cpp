#include<iostream>
void test1(){
  int a {1};
  int& refA {a};
  std::cout << refA << std::endl;
  refA += 1;
  std::cout << refA << std::endl;
  std::cout << a << std::endl; 
}

void test2(int& p){
  p += 1;
  std::cout << p << std::endl; 
}

void test3(int p){
  p += 1;
  std::cout << p << std::endl; 
}

void test4(){
  int a{1};
  test3(a);
  test2(a);
  std::cout << a << std::endl; 
}

void test5(){
  int arr[]{1,2,3,4};
  for(int& val : arr){
    std::cout << val << std::endl; 
  }
}

int main(){
  test1();
  test4();
  test5();
  return 0;
}