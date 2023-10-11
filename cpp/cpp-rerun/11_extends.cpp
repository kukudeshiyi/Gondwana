#include<iostream>
#include<random>
#include<string>

class Message {
  public:
    Message(): messageId(createMessageId()){}
    const int messageId;
    virtual void sendMessage(){}
  private:
    int createMessageId(){
      std::random_device dev;
      return dev();
    }
};

class TextMessage: public Message {
  public:
    TextMessage(): Message() {}
    std::string text;
    void sendMessage() override {
      std::cout << messageId << ":" << text << std::endl;
    }
};

class FileMessage : public Message {
  public:
    FileMessage(): Message() {}
    std::string filepath;
    void sendMessage() override {
      std::cout << messageId << ":" << filepath << std::endl;
    }
};

void send(Message& message){
  message.sendMessage();
}

int main(){
  TextMessage textMsg;
  textMsg.text = "test1";
  send(textMsg);
}