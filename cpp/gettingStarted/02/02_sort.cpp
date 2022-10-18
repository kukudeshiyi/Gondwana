#include<iostream>
#include<vector>
using namespace std;

void display( vector<int> vec ){
  for( int ix = 0; ix < vec.size(); ix++ ){
    cout << vec[ix] << ' ';
  }
  cout << endl;
}

void swap( int &val1, int &val2 ){
  int temp = val1;
  val1 = val2;
  val2 = temp;
}

void bubble_sort( vector<int> &vec ){
  for( int ix = 0; ix < vec.size(); ++ix ){
    for( int jx = ix + 1; jx < vec.size(); ++jx ){
      if( vec[ix] > vec[jx] ){
        swap( vec[ix], vec[jx] );
      }
    }
  }
}

int main(){
  int arr_size = 6;
  int arr[] = {
    1,9,3,
    4,2,6
  };

  vector<int> vec( arr, arr + arr_size );
  display(vec);
  bubble_sort(vec);
  display(vec);
  return 0;
}