#include<iostream>
#include<chrono>
#include<future>
#include<string>

int main(){
  auto func = [](int num)->int{
    std::cout << "thread start" << std::endl;
    std::this_thread::sleep_for(std::chrono::seconds(6));
    std::cout << "thread end" << std::endl;
    return num * 3;
  };
  std::future<int> res = std::async(func,123);
  std::this_thread::sleep_for(std::chrono::seconds(3));
  int val = res.get();
  std::cout << "val: " << val << std::endl;
}