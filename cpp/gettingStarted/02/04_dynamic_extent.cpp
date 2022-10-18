#include<iostream>
using namespace std;

int main(){
  int *pi;
  pi = new int;
  *pi = 1024;
  cout << "pi value is " << *pi << endl;


  int *pi_1;
  pi_1 = new int(4096);
  cout << "pi_1 value is " << *pi_1 << endl;

  int *pia = new int[ 24 ];
  
  // 手动释放堆内存中的对象
  delete pi;
  delete pi_1;
  delete [] pia;
  return 0;
}