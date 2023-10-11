#include<iostream>

class Test {
  public:
    int val;
    Test(){
      val = 1;
    }
};

void test1(){
  Test* myTest{ new Test() };
  std::cout<< myTest->val << std::endl;
  myTest->val = 456;
  std::cout<< myTest->val << std::endl;
  delete myTest;
}

void test2(Test& t){
  std::cout<< t.val << std::endl;
}

void test3(Test* t){
  std::cout<< t->val << std::endl;
}

void test4(){
  Test t;
  test2(t);

  Test* t2{ new Test() };
  test3(t2);
  delete t2;
}

int main(){
  // int* pointerA {nullptr};
  // std::cout << pointerA << std::endl;
  // int a = 1;
  // std::cout << &a << std::endl;
  // int* pointerB { &a };
  // std::cout << pointerB << std::endl;
  // *pointerB += 1;
  // std::cout << *pointerB << std::endl;
  // std::cout << a << std::endl;

  // test1();
  test4();
  return 0;
}