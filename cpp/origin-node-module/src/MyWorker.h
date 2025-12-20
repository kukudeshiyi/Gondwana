#pragma once
#include<napi.h>

class MyWorker: public Napi::AsyncWorker
{
  public:
    MyWorker(Napi::Function &callback, int timeSpan);
    virtual ~MyWorker();
    void Execute();
    void OnOK();
  private:
    int runTime();
}