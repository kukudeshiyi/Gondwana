#include<iostream>

class ORM
{
  public:
    ORM* Select(const char* p){
      std::cout<< p << std::endl;
      return this;
    }
    ORM* From(const char* p){
      std::cout<< p << std::endl;
      return this;
    }
};

int main(){
  ORM orm;
  orm.Select("f")->From("table");
}