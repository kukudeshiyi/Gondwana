#include<iostream>
using namespace std;

void display( const vector<int> &vec, ostream &os = cout );
const int size = 6;
extern const string* (*fn_array[])(); // 因为这是对 const object 的指针的声明，所以需要添加 extern 关键字