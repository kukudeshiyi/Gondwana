
#include<iostram>
#include "Triangular.hpp"

int main(){
  Triangular trian( 1, 8 );
  Triangular::iterator it = trian.begin();
  Triangular::iterator end_it = trian.end();

  while( it != end_it ){
    std::cout<< *it << " ";
    ++it;
  }
}