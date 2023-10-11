#include<iostream>
#include<string>

class Message{
  public:
    std::string text;
    Message():text("yed"){}
};

class MessageRAII{
  public:
    MessageRAII():msg( new Message() ){}
    Message* get() { return msg; }
    ~ MessageRAII(){
      delete msg;
    }
    Message* msg;
};

int main(){
  MessageRAII msgRAIIobj;
  std::cout << msgRAIIobj.get()->text << std::endl;
}