#include<iostream>
#include<fstream>
using namespace std;

int main(){
  ofstream outfile("testText",ios_base::app);
  if(!outfile){
    cerr << "oops! error";
  }else{
    outfile << "liqi" << ' '
            << "liqi1" << ' '
            << "liqi2" << endl;
  }

  ifstream infile("testText");
  int num_tries = 0;
  int num_cor = 0;

  if(!infile){
    cerr << "oops! error";
  }else{
    string name;
    int nt;
    int nc;
    
    while(infile >> name){
      cout << name << endl;
    }
  }

  fstream iofile("testText",ios_base::in|ios_base::app);
  if(!iofile){
    cerr << "oops! error";
  }else{
    string name;
    iofile.seekg(0);
    while(iofile >> name){
      cout << name << "haha" << endl;
    }
  }
  return 0;
}