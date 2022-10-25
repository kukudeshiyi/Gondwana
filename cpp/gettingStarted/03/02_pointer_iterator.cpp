#include<iostream>
#include<vector>
#include<list>
using namespace std;

template<typename IteratorType, typename elemType>
IteratorType 
find( IteratorType first, IteratorType last, elemType &value){
  for( ; first != last; ++first ){
    if( value == *first ){
      return first;
    }
  }
  return last;
}

void comp( vector<int> &vec1, vector<int> &vec2 ){
  
}

int main(){
  string arr[] = {
    "123",
    "456"
  };
  vector<string> vec_str( arr, arr+2 );
  vector<string>::iterator iter = vec_str.begin();
  cout << "vector first element is " << *iter << endl;

  const vector<string> vec_str_1( arr, arr+2 );
  vector<string>::const_iterator iter_1 = vec_str_1.end();
  cout << "const vector first element is " << *(--iter_1) << endl;

  // 处理数组、vector、list 元素
  const int size = 8;
  const int ia[ size ] = { 1, 2, 3, 4, 5, 6 };
  
  vector<int> ivec( ia, ia+size );
  list<int> ilist( ia, ia+size );

  vector<int>::iterator vec_iter = find( ivec.begin(), ivec.end(), ia[2] );
  list<int>::iterator list_iter = find( ilist.begin(),ilist.end(), ia[2] );

  if( vec_iter != ivec.end() ){
      cout << "vec_iter " << *vec_iter << endl;
  }

  if( list_iter != ilist.end() ){
      cout << "list_iter " << *list_iter << endl;
  }

  return 0;
}