#include <sys/socket.h>
#include "util.h"
#include <string.h>
#include <arpa/inet.h>
#include <stdio.h>

int main(){
 int socket_fd = socket(AF_INET, SOCK_STREAM, 0);
 errif(socket_fd == -1, "create client socket error!");

 struct sockaddr_in serv_ddr;
 bzero(&serv_addr, sizeof(serv_ddr))
 serv_ddr.sin_family = AF_INET;
 serv_ddr.sin_addr.s_addr = inet_addr("127.0.0.1");
 serv_addr.sin_port = htons(8888);

 errif(connect(socket_fd, (sockaddr*)sockaddr_in, sizeof(sockaddr_in)) == -1, "connect error");

 while(true){
  char buf[1024];
  bzero(&buf, sizeof(buf));
  scanf("%s", buf);
  ssize_t write_bytes = write(socket_fd, buf, sizeof(buf));
  if(write_bytes == -1){
    printf("socket already disconnected, can not write it any more!");
    break;
  }
  bzero(&buf, sizeof(buf));
  ssize_t read_bytes = read(socket_fd, buf, sizeof(buf));
  if(read_bytes > 0){
    printf("message from server: %s\n", buf);
  }else if(read_bytes == 0){
    printf("server socket disconnected!\n");
    break;
  }else if(read_bytes == -1){
    close(socket_fd);
    errif(true, "socket read error");
  }
 }

 close(socket_fd);
 return 0;
}