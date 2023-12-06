#include <sys/socket.h>
#include <arpa/inet.h>
#include <string.h>
#include "util.h"
#include <unistd.h>
#include<stdio.h>

int main(){
  int socketFd = socket(AF_INET, SOCK_STREAM, 0);

  struct sockaddr_in serv_addr;
  bzero(&serv_addr, sizeof(serv_addr));
  serv_addr.sin_family = AF_INET;
  serv_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
  serv_addr.sin_port = htons(8888);
  errif(connect(socketFd, (sockaddr *)&serv_addr, sizeof(serv_addr))==-1, "socket connect error");

  while(true){
    char buf[1024];
    bzero(&buf, sizeof(buf));
    scanf("%s", buf);
    ssize_t write_bytes = write(socketFd, buf, sizeof(buf));
    if(write_bytes == -1){
      printf("socket already connected, but can not write any more\n");
      break;
    }
    bzero(&buf, sizeof(buf));
    ssize_t read_bytes = read(socketFd, buf, sizeof(buf));
    if(read_bytes > 0){
      printf("message from server: %s\n", buf);
    }else if(read_bytes == 0){
      printf("server socket disconnected\n");
      break;
    }else if(read_bytes == -1){
      close(socketFd);
      errif(true, "socket read error");
    }
  }

  close(socketFd);
  return 0;
}