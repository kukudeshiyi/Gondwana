#include "Socket.h"
#include <sys/socket.h>
#include "util.h"
#include <fcntl.h>
#include "InetAddress.h"
#include <unistd.h>

Socket::Socket():fd(-1){
  fd = socket(AF_INET, SOCK_STREAM, 0);
  errif(fd == -1, "socket create error");
}

Socket::Socket(int _fd):fd(_fd){
  errif(fd == -1, "socket create error");
}

Socket::~Socket(){
  if(fd != -1){
    close(fd);
    fd = -1;
  }
}

void Socket::bind(InetAddress *inet_addr){
  errif(::bind(fd, (sockaddr*)&inet_addr->addr, inet_addr->addr_len) == -1, "bind error");
}

void Socket::listen(){
  errif(::listen(fd, SOMAXCONN) == -1,"listen error");
}

void Socket::setnonblocking(){
  fcntl(fd, F_SETFL, fcntl(fd, F_GETFL) | O_NONBLOCK);
}

int Socket::accept(InetAddress* addr){
    int clnt_sockfd = ::accept(fd, (sockaddr*)&addr->addr, &addr->addr_len);
    errif(clnt_sockfd == -1, "socket accept error");
    return clnt_sockfd;
}

int Socket::getFd(){
  return fd;
}