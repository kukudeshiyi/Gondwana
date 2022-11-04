#include<iostream>
#include<vector>
#include<functional>
#include<algorithm>
using namespace std;

vector<int> less_than_10( const vector<int> &vec ){
  vector<int> nvec;
  for( int ix = 0; ix < vec.size(); ++ix ){
    if( vec[ix] < 10 ){
      nvec.push_back( vec[ ix ] );
    }
  }
  return nvec;
}

// 实现一个可以自定义比较条件的 filter
vector<int> filter( const vector<int> &vec, int filterValue, bool (*pred)( int, int ) ){
  vector<int> nvec;
  for( int ix = 0; ix < vec.size(); ++ix ){
    if( pred( vec[ix], filterValue ) ){
      nvec.push_back( vec[ix] );
    }
  }
  return nvec;
}

// 上面实现的 filter，传入的是函数指针来自定义，所以我们使用 function object
// 另外可以使用 function object adapter 可以给 function object 绑定一个参数，这样用户只需要传递另外一个参数就可以了。


int main(){
  const int size = 8;
  int arr[size] = {
    1,2,3,4,
    5,6,7,8
  };
  vector<int> vec( arr, arr+size );
  vector<int> vec_1 = less_than_10(vec);
  cout << "result is " << vec_1[0] << ' ' << vec_1[ vec_1.size() - 1 ] << endl;


  // sort 排序默认是升序排列，可以传递 function object 让 sort 以降序排列
  sort( vec.begin(), vec.end(), greater<int>() );
  cout << "sort result is " << vec[0] << ' ' << vec[ vec.size() - 1 ] << endl;
  cout << "binary search result is " << binary_search( vec.begin(), vec.end(), 4, greater<int>() ) << endl;


  // function object adapter

  return 0;
}