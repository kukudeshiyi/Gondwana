#include<iostream>
#include<string>

int main(){
  std::string str {"1"};
  std::string str2 {"2"};
  auto print = [&str](std::string &p){
    std::string str3 {"3"};
    std::cout << str << p << str3 << std::endl;
  };
  print(str2);
}