#include<iostream>
#include<vector>
#include<list>
#include<deque>
using namespace std;

int main(){
  // 定义空的容器
  list<string> slist;
  vector<int> ivec;

  // 定义特定大小的空容器，初始值为默认值
  list<int> ilist( 1024 );
  vector<string> svec( 32 );

  // 产生特定大小的容器，并为每个容器定义初始值
  vector<int> ivec1( 10, -1 );
  list<string> slist1( 16, "str"); 

  // 根据某个容器产生新的容器。复制元容器内的元素，作为新容器的初值
  list<string> slist2;
  list<string> slist3( slist2 );
  return 0;
}