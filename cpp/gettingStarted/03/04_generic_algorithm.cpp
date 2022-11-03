#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;

template<typename type>
bool grow_vec( vector<type> &vec, type val ) {
    if(vec.size() < 2)
        vec.insert(vec.begin(), 2 - vec.size(), 1);
    while(vec[vec.size()-1] < val)
        vec.push_back(vec[vec.size()-1] + vec[vec.size() - 2]);
    return vec[vec.size() - 1] == val;
}

bool is_elem( vector<int> &vec, int elem ){
  int max_value = *max_element( vec.begin(), vec.end() );
  // int max_value = vec.empty() ? 0 : vec[vec.size()-1];
  if( max_value < elem){
    return grow_vec( vec, elem );
  }
  if( max_value == elem ){
    return true;
  }
  return binary_search( vec.begin(), vec.end(), elem );
}

int main(){
  int arr[8] = {
    1,2,3,4,
    5,6,7,8
  };
  vector<int> vec( arr, arr+8 );
  cout << "result is " << (is_elem( vec, 8 ) ? "true" : "false") << endl;
  return 0;
}