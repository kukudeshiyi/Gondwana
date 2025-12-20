#include<iostream>
struct MyStruct 
{
  int a{1};
  void func(){
    std::cout<<"a: "<<a<<std::endl;
  }
};

int main(){
  MyStruct m;
  m.func();
  std::cout<<"a: "<<m.a<<std::endl;
}