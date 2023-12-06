#include<iostream>
#include<string>

void print( std::string& str ){
  std::cout << str << std::endl;
}

using printType = void (*)(std::string& str);
void callFunc( printType f, std::string& param){
  f(param);
}

int main(){
  std::string content{"123"};
  callFunc(print, content);
}