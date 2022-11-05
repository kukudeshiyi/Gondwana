#include<iostream>
#include<iterator>
#include<vector>
#include<functional>
using namespace std;

// 举个例子，当你需要对一个容器进行过滤操作的时候，你需要一个额外的容器来存储过滤的结果
// 但是，这个容器具体需要多大的空间，你不好把握，所以为了安全的进行指针计算以及 assign 赋值，你需要将这个额外容器设置的足够大，一般都是操作容器的 size
// 为了解决这个问题，c++ STL 提供了三个 insertion adapter，使用 adapter 可以取代 assign 的容器操作，使用 insert 来操作容器
template<typename InputIterator, typename OutputIterator, typename ElemType, typename Comp>
OutputIterator filter_1( InputIterator first, InputIterator last, OutputIterator at, const ElemType &val, Comp pred){
  while( (first = find_if( first, last, bind2nd( pred,val ))) != last ){
    cout << "found value:" << *first << endl;
    *at++ = *first++;
  }
  return at;
}

int main(){
  const int elem_size = 8;
  int ia[ elem_size ] = {
    12, 8, 9, 0,
    32, 10, 7, 56
  };
  vector<int> ivec( ia, ia+elem_size );

  int ia2[ elem_size ];
  vector<int> ivec2;

  filter_1( ia, ia+elem_size, ia2, elem_size, less<int>() );
  filter_1( ivec.begin(), ivec.end(), back_inserter(ivec2), elem_size, greater<int>() );

  return 0;
}