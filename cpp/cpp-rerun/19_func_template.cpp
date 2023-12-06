#include<iostream>
#include<functional>

class MyFunc{
  public:
    int operator()(int x, int y){
      return x + y;
    }
};

int add(int x, int y){
      return x + y;
}

void callF(std::function<int(int,int)> f, int x, int y){
  std::cout << f(x,y) << std::endl;
}

int main(){
  MyFunc myFunc;
  callF(myFunc, 1,2);
  callF(add, 2,2);
}