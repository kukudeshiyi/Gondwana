#include<iostream>
#include<thread>
#include<string>

int main(){
  auto func = [](int tId, int num){
    for(size_t i = 0; i < num; ++i){
      std::string str = "threadId: "+ std::to_string(tId)+ " print: "+ std::to_string(i) + "\n"; 
      std::cout << str << std::endl;
    }
  };
  std::thread t(func, 0, 6);
  std::thread t2(func, 1, 3);
  t.join();
  t2.join();
  std::cout << "t thread Id: " << t.get_id() << std::endl;
  std::cout << "this thread Id: " << std::this_thread::get_id() << std::endl;
}
