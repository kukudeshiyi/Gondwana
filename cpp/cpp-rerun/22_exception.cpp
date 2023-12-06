#include<iostream>
#include<string>

std::string getPhoneNum(){
  std::cout << "please input: " << std::endl;
  std::string res;
  std::cin >> res;
  if(res.length() != 11){
    throw std::length_error("number error" + res);
  }else{
    return res;
  }
}

int main(){
  std::string phoneNum;
  try{
    phoneNum = getPhoneNum();
  }catch(const std::exception& e){
    std::cout << e.what() << std::endl;
  }
  std::cout << "phone" << phoneNum << std::endl;
}