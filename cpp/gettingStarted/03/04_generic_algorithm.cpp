#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

extern bool grow_vec( vector<int>&, int );

bool is_elem( vector<int> &vec, int elem ){
  // int max_value = max_element( vec.begin(), vec.end() );
  int max_value = vec.empty() ? 0 : vec[vec.size()-1];
  if( max_value < elem){
    return grow_vec( vec, elem );
  }
  if( max_value == elem ){
    return true;
  }
  return binary_search( vec.begin(), vec.end(), elem );
}

int main(){
  return 0;
}