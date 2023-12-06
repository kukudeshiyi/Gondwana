#include<iostream>
#include<string>

void print(std::string&& str){
  str = "hello";
  std::cout<< str << std::endl;
}

int main(){
  print("test");
}