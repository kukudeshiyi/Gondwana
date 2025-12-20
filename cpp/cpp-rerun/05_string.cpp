#include<iostream>
#include<string>

int main(){
  std::string a {"hello!"};
  std::string b;
  std::cout << a.empty() << std::endl
  << b.empty() << std::endl
  << a.length() << std::endl;

  a = a + "makabaka";
  std::cout<< a << std::endl;
  a.insert(0,"c++");
  std::cout<< a << std::endl;
  auto index = a.find("hello");
  std::cout<< index << std::endl;
  std::cout<< a.substr(0,5) << std::endl;
  std::string c{R"(asdasd
  
  asdas)"};
  std::cout <<  c << std::endl;
  return 0;
}