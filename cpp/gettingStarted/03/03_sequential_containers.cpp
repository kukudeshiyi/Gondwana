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

  // 通过一对 iterator 产生的容器
  int ia[8] = {
    1,2,3,4,
    5,6,7,8
  };
  vector<int> fib(ia, ia+8);

  // 根据某个容器产生新的容器。复制元容器内的元素，作为新容器的初值
  list<string> slist2;
  list<string> slist3( slist2 );

  deque<int> a_line(ia, ia+8);
  a_line.push_back(9);
  cout << "The first value is "<< a_line.front() << endl;
  cout << "The last value is "<< a_line.back() << endl;
  a_line.pop_back();
    cout << "The last value is "<< a_line.back() << endl;

  // push_back,pop_back 允许在容器的末尾进行添加和删除操作
  
  // list 和 deque 还提供了 push_front 和 pop_front

  // push 等操作都来源于容器的 insert，pop 则来自 erase

  // insert 
  // 将元素添加到指定位置之前
  vector<int>::iterator vec_it = fib.begin();
  cout << "fib first value is " << fib.front() << endl;
  fib.insert( vec_it, 0);
  cout << "fib first value is " << fib.front() << endl;
  // 将 n 个值为 v 的元素添加到指定位置之前
  vector<int>::iterator vec_it_1 = fib.begin();
  cout << "fib first value is " << fib.front() << endl;
  fib.insert( vec_it_1, 2, 0);
  cout << "fib fist and second value is " << fib.front() << ' ' << *(--vec_it_1) << endl;
  // 在指定位置之前添加两个 iterator 之间的元素
  vector<int> test;
  vector<int>::iterator vec_it_2 = test.begin();
  test.insert( vec_it_2, ia, ia+8 );
  cout << "first and last value is " << test.front() << ' ' << test.back() << endl;
  // erase 

  // 删除指定位置的元素
  list<int> list_1( ia, ia + 8 );
  list<int>::iterator list_it = list_1.begin();
  cout << "first value is " << list_1.front() << endl;
  list_1.erase(list_it);
  cout << "first value is " << list_1.front() << endl;
  // 删除指定范围的元素
  list_1.push_front(2);
  cout << "first value is " << list_1.front() << endl;
  list_1.push_front(1);
  cout << "first value is " << list_1.front() << endl;
  cout << "list_1's length is " << list_1.size() << endl;
  list_1.erase(list_1.begin(),list_1.end());
  cout << "list_1's length is " << list_1.size() << endl;
  return 0;
}