#include "Connection.h"
#include "EventLoop.h"
#include "Socket.h"
#include "Channel.h"
#include <unistd.h>
#include "Buffer.h"
#include <string.h>

#define READ_BUFFER 1024

Connection::Connection(EventLoop *_loop, Socket *_socket):loop(_loop), socket(_socket), inBuffer(new std::string()), readBuffer(nullptr){
  channel = new Channel(loop,_socket->getFd());
  std::function<void(Socket*)> cb = std::bind(&Connection::echo, this, sock->getFd());
  channel->setCallback(cb);
  channel->enableReading();
  readBuffer = new Buffer();
}

Connection::~Connection(){
  delete socket;
  delete channel;
}

void Connection::echo(int sockfd){
    char buf[READ_BUFFER];
    while(true){    //由于使用非阻塞IO，读取客户端buffer，一次读取buf大小数据，直到全部读取完毕
        bzero(&buf, sizeof(buf));
        ssize_t bytes_read = read(sockfd, buf, sizeof(buf));
        if(bytes_read > 0){
            printf("message from client fd %d: %s\n", sockfd, buf);
            readBuffer->append(buf, bytes_read);
        } else if(bytes_read == -1 && errno == EINTR){  //客户端正常中断、继续读取
            printf("continue reading");
            continue;
        } else if(bytes_read == -1 && ((errno == EAGAIN) || (errno == EWOULDBLOCK))){//非阻塞IO，这个条件表示数据全部读取完毕
            printf("finish reading once, errno: %d\n", errno);
            printf("message from client fd %d: %s\n", sockfd, readBuffer->c_str());
            errif(write(sockfd, readBuffer->c_str(), readBuffer->size()) == -1, "socket write error");
            readBuffer->clear();
            break;
        } else if(bytes_read == 0){  //EOF，客户端断开连接
            printf("EOF, client fd %d disconnected\n", sockfd);
            // close(sockfd);   //关闭socket会自动将文件描述符从epoll树上移除
            deleteConnectionCallback(sock);
            break;
        }
    }
}

void Connection::setDeleteConnectionCallback(std::function<void(Socket*)> _cb){
  deleteConnectionCallback = _cb;
}

