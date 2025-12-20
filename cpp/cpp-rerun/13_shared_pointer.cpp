#include<iostream>
#include<memory>

class MyClass{
  public:
    int val;
    MyClass(){
      val = 123;
    }
};

int main(){
  {
    std::shared_ptr<MyClass> myClass = std::make_shared<MyClass>();
    std::cout << myClass->val << " " << myClass.use_count() << std::endl;
  }
}