#include<iostream>
#include<fstream>
#include<vector>
#include "NumbericSeq.h"
using namespace std;

void foreach_vector_output( vector<int> &vec, ofstream *ofs = 0 ){
  for( int ix = 0; ix < vec.size(); ++ix ){ 
    if( ofs != 0 ){
      ( *ofs ) << "vector " << ix << " item is " << vec[ix] << endl;
    }
  }
}

void display( const vector<int> &vec, ostream &os){
    for( int ix = 0; ix < vec.size(); ++ix ){ 
      os << "vector " << ix << " item is " << vec[ix] << endl;
  }
}

int main(){
  int arr[] = {
    1,2,3,
    4,5,6
  };
  ofstream ofs( "outputText", ios_base::app );
  vector<int> vec( arr, arr+6 );
  foreach_vector_output( vec, &ofs );
  display( vec );
  return 0;
}