#pragma once
#include<string>

class Message
{
  public:
    Message(int fromId,int toId,std::string& messageContent);
    void SendMessage();
    const int MessageId;
    const int ToId;
    const int FromId;
    const std::string& MessageContent;
    static inline int MsgCount{0};
  private:
    int createMessageId();
};
