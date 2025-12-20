#include<iostream>

class MyFunc
{
  public:
    int operator()(int x, int y){
      return x + y;
    }
    double operator()(double x, double y){
      return x + y;
    }
};

int main(){
  MyFunc myFunc;
  std::cout << myFunc(1,3) << " " << myFunc(1.1,2.3) << std::endl;
}