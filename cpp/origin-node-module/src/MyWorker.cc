#include "MyWoker.h"
#include <chrono>
#include <thread>
#include <napi.h>

MyWorker::MyWorker(Napi::Function &callback. int timeSpan):AsyncWorker(callback), timeSpan(timeSpan){};

void MyWorker::Execute(){
  std::this_thread::sleep_for(std::chrono::seconds(runTime));
  if(runTime == 4){
    setError("failed after 'working' 4 seconds.")
  }
}

void MyWorker::OnOk(){
  Napi::Array arr = Napi::Array::New(Env(),3);
  arr.Set(Napi::Number::New(Env(), 0), Napi::String::New(Env(), "test1"));
  arr.Set(Napi::Number::New(Env(), 1), Napi::String::New(Env(), "test1"));
  arr.Set(Napi::Number::New(Env(), 2), Napi::Number::New(Env(), 123));
  //把数组对象传递给回调方法
  Callback().Call({Env().Null(), arr});
}