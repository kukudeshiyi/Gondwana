#include<iostream>
#include<random>
#include<string>
#include "message.h"

Message::Message(int fromId, int toId, std::string& messageContent):
  FromId{fromId},
  ToId{toId},
  MessageContent{messageContent},
  MessageId{createMessageId()}
  {
    MsgCount += 1;
  }

void Message::SendMessage(){
  std::cout << MessageContent << std::endl;
}

int Message::createMessageId(){
  std::random_device dev;
  return dev();
}