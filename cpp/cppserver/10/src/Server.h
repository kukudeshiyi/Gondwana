#pragma once
#include <map>

class EventLoop;
class Socket;
class Acceptor;
class Connection;
std::map<int, Connection*> connections;

class Server
{
  private:
    EventLoop *loop;
    Acceptor *acceptor;

  public:
    Server(EventLoop*);
    ~Server();

    void handleReadEvent(int);
    void newConnection(Socket *serv_sock);
    void deleteConnection(Socket *sock);
};