#include <sys/socket.h>
#include "util.h"
#include <string.h>
#include <arpa/inet.h>
#include <sys/epoll.h>
#include <fcntl.h>

#define MAX_EVENTS 1024
#define READ_BUFFER 1024

void setnonblocking(int fd){
  fcntl(fd, F_SETFL, fcntl(fd,F_GETFL) | O_NONBLOCK);
}

int main(){
  int socket_fd = socket(AF_INET, SOCK_STREAM, 0);
  errif(socket_fd == -1, "create socket error");

  struct sockaddr_in serv_addr;
  bzero(&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
  serv_addr.sin_port = htons(8888);
  
  errif(bind(socket_fd, (sockaddr *)&serv_addr, sizeof(serv_addr)) == -1, "socket bind error");

  errif(listen(socket_fd, SOMAXCONN) == -1, "listen socket error");

  int epfd = epoll_create1(0);
  errif(epfd == -1, "epoll create error");

  struct epoll_event events[MAX_EVENTS], ev;
  bzero(&events, sizeof(events));

  bzero(&ev,sizeof(ev));
  ev.data.fd = socket_fd;
  ev.events = EPOLLIN | EPOLLET;
  setnonblocking(socket_fd);
  epoll_ctl(epfd, EPOLL_CTL_ADD, socket_fd, &ev);

  while(true){
    int nfds = epoll_wait(epfd, events, MAX_EVENTS, -1);
    errif(nfds == -1, "epoll wait error");
    for(int i = 0, i < nfds; ++i){
        if(events[i].data.fd == socket_fd){
          struct sockaddr_in clnt_addr;
          bzero(&clnt_addr, sizeof(clnt_addr));
          socklen_t clnt_addr_len = sizeof(clnt_addr);
          
          int clnt_sockfd = accept(sockfd, (sockaddr*)&clnt_addr, &clnt_addr_len);
          errif(clnt_sockfd == -1, "socket accept error");
          printf("new client fd %d! IP: %s Port: %d\n", clnt_sockfd,  inet_ntoa(clnt_addr.sin_addr), ntohs(clnt_addr.sin_port));
          
          bzero(&ev, sizeof(ev));
          ev.data.fd = clnt_sockfd;
          ev.events = EPOLLIN | EPOLLOUT;
          setnonblocking(clnt_sockfd);
          epoll_ctl(epfd, EPOLL_CTL_ADD, clnt_sockfd, &ev);
        }else if(events[i].events | EPOLLIN){
          char buf[READ_BUFFER];
          while(true){
            bzero(&buf, sizeof(buf));
            ssize_t bytes_read = read(events[i].data.fd, buf, sizeof(buf));
            if(bytes_read > 0){
              printf("message from client fd %d: %s\n", events[i].data.fd, buf);
              write(events[i].data.fd, buf, sizeof(buf));
            }else if(bytes_read == -1 && errno == EINTR){
              printf("continue reading");
              continue;
            }else if(bytes_read == -1, &&((errno == EAGAIN) || (errno == EWOULDBLOCK))){
              printf("finish reading once, errno: %d\n", errno);
              break;
            }else if(bytes_read == 0){
              printf("EOF, client fd %d disconnected\n", events[i].data.fd);
              close(events[i].data.fd);
              break;
            }
          }
        }else{
           printf("something else happened\n");
        }
    }
  }
  close(socket_fd);
  return;
}