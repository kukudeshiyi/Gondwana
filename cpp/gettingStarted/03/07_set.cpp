#include<iostream>
#include<string>
#include<vector>
#include<set>
using namespace std;


int main(){
  const int size = 8;
  set<int> words;
  int arr[size] = {
    1,2,3,4,
    5,6,7,8
  };
  words.insert( 0 );
  words.insert( arr, arr+size );

  if( words.count(1) ){
    cout << "1 is in words" << endl;
  }

  set<int>::iterator it = words.begin();
  for( ; it != words.end(); ++it ){
    cout << "set value: " << *it << endl;
  }
  return 0;
}