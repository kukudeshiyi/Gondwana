#include<iostream>
#include<vector>
#include<cstdlib>
using namespace std;

int main(){
  int arr_size = 5;
  int test_arr[arr_size];

  int test_arr_1[] = {
    1,2,3,5,7
  };

  for(int i = 0;i<arr_size;i++){
    cout << test_arr[i] << endl;
  }

  vector<int> test_vector(arr_size);
  test_vector[ 0 ] = 0;
  test_vector[ 1 ] = 0;
  test_vector[ 2 ] = 0;

  // 通过数组来初始化 vector 容器
  vector<int> test_vector_1(test_arr_1,test_arr_1 + arr_size);
  cout << "vector size" << ' ' << test_vector_1.size() << endl;

  switch(arr_size){
    case 5:
      cout << "arr size is 5" << endl;
      break;
    default:
      cout << "dont know arr size" << endl;
  }

  // pointer
  int ival = 1024;
  int *pi = &ival;
  int *pi_1 = &test_arr[0];
  cout << *pi << ' ' << pi << endl;
  cout << *pi_1 << ' ' << pi_1 << endl;

  // vector pointer
  vector<int> *pv[2] = {
    &test_vector,
    &test_vector_1
  };

    // 通过指针需要通过箭头成员选择运算符
  if(
    pv[0] && !pv[0]->empty()
  ){
    cout << "pv[0] && !pi[0]->empty()" << endl;
  }

  // random
  srand(arr_size);
  int random = rand() % arr_size;
  cout << random << endl;
  return 0;
}