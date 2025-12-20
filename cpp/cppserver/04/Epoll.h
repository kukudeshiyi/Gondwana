#pragma once
#include <sys/epoll.h>
#include <vector>


class Epoll{
  private:
    int epfd;
    struct epoll_events* events;
  public:
    Epoll();
    ~Epoll();

    void addFd(int fd, uint32_t op);
    std::vector<epoll_events> poll(int timeout = -1);
}