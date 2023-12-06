#include "src/util.h"
#include <sys/socket.h>
#include <string.h>
#include <arpa/inet.h>
#include <iostream>
#include <unistd.h>

#define BUFFER_SIZE 1024

int main(){
  int clnt_sock = socket(AF_INET, SOCK_STREAM, 0);
  errif(clnt_sock == -1, "client socket create error!");

  struct sockaddr_in addr;
  bzero(&addr, sizeof(addr));
  addr.sin_family = AF_INET;
  addr.sin_addr.s_addr = inet_addr("127.0.0.1");
  addr.sin_port = htons(8888);

  errif(connect(clnt_sock, (sockaddr*)&addr, sizeof(addr)) == -1, "connect error!");

  while(true){
    char buf[BUFFER_SIZE];
    bzero(&buf, sizeof(buf));
    scanf("%s",buf);
    ssize_t write_bytes = write(clnt_sock, buf, sizeof(buf));
    if(write_bytes == -1){
      printf("socket already disconnected, can't write any more!\n");
      break;
    }
    bzero(&buf, sizeof(buf));
    ssize_t read_bytes = read(clnt_sock, buf, sizeof(buf));
    if(read_bytes > 0){
      printf("message from server: %s\n", buf);
    }else if(read_bytes == 0){
      printf("server disconnected\n");
      break;
    }else if(read_bytes == -1){
      close(clnt_sock);
      errif(true, "socket read error!");
    }
  }

  close(clnt_sock);
  return 0;
}