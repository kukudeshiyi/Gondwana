#include<iostream>
#include<vector>
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

// function object

int main(){
  const int size = 8;
  int arr[size] = {
    1,2,3,4,
    5,6,7,8
  };
  vector<int> vec( arr, arr+size );
  vector<int> vec_1 = less_than_10(vec);
  cout << "result is " << vec_1[0] << ' ' << vec_1[ vec_1.size() - 1 ] << endl;
  return 0;
}