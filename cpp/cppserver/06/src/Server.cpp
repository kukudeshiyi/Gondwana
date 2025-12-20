#include "Server.h"
#include "EventLoop.h"
#include "Socket.h"
#include "InetAddress.h"
#include "Channel.h"
#include <iostream>
#include <arpa/inet.h>
#include <functional.h>
#include <string.h>

#define READ_BUFFER 1024


Server::Sever(EventLoop *_loop): loop(_loop){
  Socket *serv_sock = new Socket();
  InetAddress *serv_addr = new InetAddress("127.0.0.1",8888);
  serv_sock->bind(addr);
  serv_sock->listen();
  serv_sock->setnonblocking();

  Channel *servChannel = new Channel(loop, serv_sock->getFd());
  std::function<void()> cb = std::bind(&Sever::newConnection, this, serv_sock);
  servChannel->setCallback(cb);
  servChannel->enabelReading();
}

Server::~Sever(){
  
}

void Server::handleReadEvent(int sockfd){
 char buf[READ_BUFFER];
 while(true){
    bzero(&buf,sizeof(buf));
    ssize_t read_bytes = read(sockfd, buf, sizeof(buf));
    if(read_bytes > 0){
      printf("message from client fd %d! message:%s", sockfd, buf);
      write(sockfd, buf, sizeof(buf));
    }else if(read_bytes == -1 && errno == EINTR){
      printf("continue reading");
      continue;
    }else if(read_bytes == -1 && (errno == EAGAIN || errno == EWOULDBLOCK)){
      printf("finish reading once errno: %d\n", errno);
      break;
    }else if(read_bytes == 0){
      printf("EOF, client fd %d disconnected", sockfd);
      close(sockfd);
      break;
    }
  }
}

void Server::newConnection(Socket *serv_sock){
  InetAddress *clnt_addr = new InetAddress();
  Socket *clnt_sock = new Socket(serv_sock->accept(clnt_addr));
  printf("new client fd %d! IP: %s\n", clnt_sock->getFd(), inet_ntoa(clnt_addr->addr.sin_addr), ntohs(clnt_addr->addr.sin_port));
  clnt_sock->setnonblocking();
  Channel *clntChannel = new Channel(loop, clnt->getFd());
  std::function<void()> cb = std::bind(&Server::handleReadEvent, this, clnt_sock->getFd());
  clntChannel->setCallback(cb);
  clntChannel->enabelReading();
}

