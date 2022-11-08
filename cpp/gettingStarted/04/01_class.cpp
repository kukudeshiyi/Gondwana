#include<iostream>
#include<string>
#include "Stack.h"
using namespace std;

void fill_stack( Stack &stack ){
  // const string str( "const string" );
  // stack.push( str ); 
  cout << "Read in " << stack.size() << " elements" << endl;
}

int main(){
  Stack stack;
  fill_stack( stack );
  return 0;
}