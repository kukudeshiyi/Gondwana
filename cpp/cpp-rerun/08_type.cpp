#include<string>
#include "message.h"

int main(){
  std::string msgContent{"test msg"};
  Message* msg{ new Message(12,34,msgContent)};
  msg->SendMessage();
  delete msg;
  return 0;
}