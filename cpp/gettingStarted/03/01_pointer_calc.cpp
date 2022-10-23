#include<iostream>
#include<vector>
using namespace std;

// 实现一个与容器类型无关的 find 函数，支持 array 和 vector

// 1、一种是通过第一个数组的地址与数组的 size 来实现元素的遍历
template <typename elemType>
const elemType* find( const elemType *array, int size, const elemType &value ){
  if( ! array || size < 0 ){
    cerr << "find() params error" << endl;
    return 0;
  }
  for( int ix = 0; ix < size; ++ix ){
    if( array[ix] == value ){
      return &array[ix];
    }
  }
  return 0;
}

// 对于第一种还有一种写法
template <typename elemType>
const elemType* find_pro( const elemType *array, int size, const elemType &value ){
  if( ! array || size < 0 ){
    cerr << "find() params error" << endl;
    return 0;
  }
  for( int ix = 0; ix < size; ++ix, ++array ){
    if( *array == value ){
      return array;
    }
  }
  return 0;
}

// 2、一种是通过数组第一个元素与最后一个元素来实现元素的遍历
template <typename elemType>
const elemType* find( const elemType *first, const elemType *last, const elemType & value ){
  if( ! first || ! last ){
    cerr << "find() params error" << endl;
    return 0;
  }
  for( ; first != last; ++first ){
    if( *first == value ){
      return first;
    }
  }
  return 0;
} 

int main(){

  // 如何获取数组的指针
  // 如此可见与函数一致,函数名即代表内存地址，在这里数组名代表的是第一个元素的地址。
  int arr[6];
  arr[0] = 1;
  cout << arr << ' '<< *arr << endl; 

  // 测试上面实现的 find 函数,寻找数组中的元素
  const int arr_1[] = {
    1,2,3,
    4,5,6,
    7,8,9
  };
  const int *arr_elem_pos = find( arr_1, 9, 5 );
  cout << "find " << *arr_elem_pos << " in " << arr_elem_pos << endl;

  const int *arr_elem_pos_1 = find_pro( arr_1, 9, 5 );
  cout << "find " << *arr_elem_pos_1 << " in " << arr_elem_pos_1 << endl;

  // 测试上面实现的 find 函数,寻找 vector 中的元素
  const vector<int> vec( arr_1, arr_1 + 9 );
  const int *vec_elem_pos = find( &vec[0], 9, 5 );
  cout << "find " << *vec_elem_pos << " in " << vec_elem_pos << endl;


  // 测试替换掉 size 形参的函数
  const int *arr_elem_pos_2 = find( arr_1, &arr_1[8], 5 );
  cout << "find " << *arr_elem_pos_2 << " in " << arr_elem_pos_2 << endl;

  const int *vec_elem_pos_1 = find( &vec[0], &vec[8], 5 );
  cout << "find " << *vec_elem_pos_1 << " in " << vec_elem_pos_1 << endl;
  return 0;
}