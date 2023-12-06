#include "Channel.h"
#include "Epoll.h"

Channel::Channel(Epoll *_ep, int _fd): ep(_ep), fd(_fd), events(0), revents(0), inEpoll(false){}

Channel::~Channel(){}

void Channel::enableReading(){
  events = EPOLLIN | EPOLLET;
  ep->updateChannel(this);
}

int Channel::getFd(){
  return fd;
}

uint32_t Channel::getEvents(){
  return events;
}

uint32_t Channel::getRevents(){
  return revents;
}

bool Channel::getInEpoll(){
  return inEpoll;
}

bool Channel::setInEpoll(){
  inEpoll = !inEpoll;
}

void Channel::setRevents(uint32_t v){
  revents = v;
}
