#include <iostream>
#include <sys/socket.h>
#include "util.h"
#include <string.h>
#include <arpa/inet.h>

#define BUFFER_SIZE 1024

int main(){
  int socket_fd = socket(AF_INET, SOCK_STREAM, 0);
  errif(socket_fd == -1, "socket create error");

  struct sockaddr_in serv_addr;
  bzero(&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
  serv_addr.sin_port = htons(8888);

  errif(connect(socket_fd, (sockaddr*)&serv_addr, sizeof(serv_addr)));

  while(true){
    char buf[BUFFER_SIZE];
    bzero(&buf, sizeof(buf));
    ssize_t write_bytes = write(socket_fd, buf, sizeof(buf));
    if(write_bytes == -1){
      printf("socket already disconnected, can not write any more!");
      break;
    }
    bzero(&buf, sizeof(buf));
    ssize_t read_bytes = read(socket_fd, buf, sizeof(buf));
    if(read_bytes > 0){
      printf("message from server:\n", buf);
    }
    if(read_bytes = 0){
      printf("server socket disconnected!");
      break;
    }
    if(read_bytes == -1){
      close(socket_fd);
      errif(true, "socket read error");
    }
  }
  close(socket_fd);
  return 0;
}