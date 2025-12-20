#include<iostream>
#include<random>

class Message{
  public:
    Message(const Message& msg) = delete;
    void operator= (const Message& msg) = delete;
    ~Message(){
      instance = nullptr;
    }
    static Message* getInstance(){
      if(instance == nullptr){
        instance = new Message();
      }
      return instance;
    }
  private:
    Message(): MessageId{createMessageId()}{}
    int createMessage(){
      std::random_device dev;
      return dev();
    }
    inline static Message* instance{ nullptr };
};

int main(){
  auto msg1 = Message::getInstance();
  auto msg2 = Message::getInstance();

  std::cout << msg1->MessageId << std::endl;
  std::cout << msg2->MessageId << std::endl;
}