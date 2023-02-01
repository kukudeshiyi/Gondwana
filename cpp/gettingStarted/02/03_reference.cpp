#include<iostream>
using namespace std;

int main(){
  int ival = 1024;
  int *pi = &ival;
  int &rval = ival;

  int jval = 4096;
  rval = jval;

  cout << "ival: " << rval << endl;
  return 0;
}