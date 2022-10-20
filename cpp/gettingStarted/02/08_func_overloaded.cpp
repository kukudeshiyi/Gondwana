#include<iostream>
using namespace std;

void display_message( char ch ){
  cout << "char is" << ' ' << ch << endl;
}
void display_message( const string& str ){
  cout << "string is" << ' ' << str << endl;
}

int main(){
  display_message('h');
  display_message("苟利国家生死以");
  return 0;
}