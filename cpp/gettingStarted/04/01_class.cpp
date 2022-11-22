#include<iostream>
#include<string>
#include "Stack.cpp"
using namespace std;

void fill_stack( Stack &stack ){
  const string str( "kelin" );
  stack.push( str ); 
  cout << "Read in " << stack.size() << " elements" << endl;
}

int main(){
  Stack stack;
  fill_stack( stack );
  return 0;
}