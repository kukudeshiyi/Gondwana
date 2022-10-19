#include<iostream>
#include<vector>
using namespace std;

const vector<int>* fibonacci_seq( int size ){
  const int max_size = 1024;
  static vector<int> elems;

  if( size <= 0 || size > max_size ){
    cerr << "invalid" << endl;
    return 0;
  }

  for( int ix = elems.size(); ix < size; ++ix ){
    if( ix == 0 || ix == 1 ){
      elems.push_back( 1 );
    }else{
      elems.push_back( elems[ix-1] + elems[ix-2] );
    }
  }
  return &elems;
}

int main(){
  const vector<int> *pi = fibonacci_seq(3);
  const vector<int> *pi_1 = fibonacci_seq(4);

  cout << (*pi)[2] << ' ' << (*pi_1)[3] << endl;
  return 0;
}