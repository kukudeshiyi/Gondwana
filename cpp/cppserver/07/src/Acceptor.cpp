#include "Acceptor.h"
#include "EventLoop.h"
#include "InetAddress.h"
#include "Socket.h"
#include "Channel.h"

Acceptor::Acceptor(EventLoop *loop){
  socket = new Socket();
  address = new InetAddress("127.0.0.1", 8888);
  socket->bind(address);
  socket->listen();
  socket->setnonblocking();

  channel = new Channel(loop, socket->getFd());
  std::function<void()> cb = std::bind(&Acceptor::newConnectionCallback, this);
  channel->setCallback(cb);
  channel->enabelReading();
}

Acceptor::~Acceptor(){
  delete socket;
  delete address;
  delete channel;
}

void Acceptor::acceptConnection(){
  newConnectionCallback(sock);
}

void Acceptor::setNewConnectionCallback(std::function<void(Socket*)> _cb){
  newConnectionCallback = _cb;
}