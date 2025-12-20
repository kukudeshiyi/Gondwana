#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <errno.h>
#include <vector>
#include "util.h"
#include "Epoll.h"
#include "InetAddress.h"
#include "Socket.h"

#define MAX_EVENTS 1024
#define READ_BUFFER 1024

void setnonblocking(int fd){
  fcntl(fd, F_SETFL, fcntl(fd, F_GETFL) | O_NONBLOCK);
}

int main(){
  Socket *serv_socket = new Socket();
  InetAddress *serv_addr = new InetAddress("127.0.0.1", 8888);
  serv_socket->bind(serv_addr);
  serv_socket->listen();
  Epoll *ep = new Epoll();
  serv_socket->setnonblocking();
  ep->addFd(serv_socket->getFd(), EPOLLIN | EPOLLET);
  while(true){
    std::vector<epoll_event> = ep->poll();
    int nfds = events.size();
    for(int i = 0,i < nfds; i++){
      if(events[i].data.fd == serv_socket->getFd()){
        InetAddress *clnt_addr = new InetAddress();
        Socket *clnt_sock = new Socket(serv_sock->accept(clnt_addr));
        printf("new client fd %d! IP: %s Post: %d\n", clnt_sock->getFd(), inet_ntoa(clnt_addr))));
        clnt_sock->setnonblocking();
        ep->addFd(clnt_sock->getFd(), EPOLLIN | EPOLLET);
      }else if(events[i].events & EPOLLIN){
          handleReadEvent(events[i].data.fd);
      }else{
        printf("something else happended\n");
      }
    }
  }
  delete serv_socket;
  delete serv_addr;
  return 0;
}

void handleReadEvent(int sockfd){
  char buf[READ_BUFFER];
  while(true){
    bzero(&buf, sizeof(buf));
    ssize_t bytes_read = read(sockfd, buf, sizeof(buf));
    if(bytes_read > 0){
      printf("message from client fd %d: %s", sockfd, buf);
      write(sockfd, buf, sizeof(buf));
    }else if(bytes_read == -1 && errno == EINTR){
      printf("continue reading");
      continue;
    }else if(bytes_read == -1 && ((errno == EAGAIN) || (errno == EWOULDBLOCK))){
      printf("finish reading once, errno:%d\n", errno);
    }else if(bytes_read == 0){
      printf("EOF, client fd %d disconnected\n", sockfd);
      close(sockfd);
      break;
    }
  }
}