#include<iostream>
using namespace std;

const string* cout_hello(){
  static string msg = "hello";
  return &msg;
}
const string* cout_hi(){
  static string msg = "hi";
  return &msg;
}
const string* cout_not_bad(){
  static string msg = "not bad";
  return &msg;
}

void display_message( const string* (*fn)() = 0 ){
  if( ! fn ){
    cerr << "fn is not a function" << endl;
  }
  const string *pi = fn();
  cout << "msg is" << ' ' << (*pi) << endl;
}

enum fn_type {
  hello,
  hi,
  not_bad
};

int main(){
  const string* (*fn_array[]) () = {
    cout_hello,
    cout_hi,
    cout_not_bad
  };
  for( int ix = 0; ix < 3 ; ++ix ){
      display_message( fn_array[ix] ); 
  }
  display_message( fn_array[ hi ] );
  return 0;
}