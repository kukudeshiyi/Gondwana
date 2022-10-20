#include<iostream>
#include<vector>
#include<list>
using namespace std;

template <typename elemType>
void display_message( const string &msg, const vector<elemType> &vec){
  cout << msg << ':' << endl;
  for( int ix = 0; ix < vec.size(); ++ix ){
   cout << ix << ' ' << vec[ix] << endl; 
  }
}

// function template also support overloaded；
template <typename elemType>
void display_message( const string &msg, const list<elemType> &lt);

int main(){
  int arr[] = {
    1,2,3,
    4,5,6
  };
  const vector<int> vec( arr,arr+6 );
  display_message( "vector elems", vec );
  return 0;
}