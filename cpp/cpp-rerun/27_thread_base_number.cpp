#include<iostream>
#include<thread>
#include<string>

int main(){
  auto func = [](int i){
    std::string str = "di " + std::to_string(i) + " work";
    std::cout<< str;
  };
  int threadNum = std::thread::hardware_concurrency();
  threadNum = threadNum == 0 ? 2 : threadNum;
  threadNum = std::min(threadNum,32);
  std::cout << "open threads: " << threadNum << std::endl;
  for(size_t i = 0; i < threadNum; ++i){
    std::thread t(func,i);
    t.detach();
  }
}
