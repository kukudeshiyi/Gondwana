#include "Triangular.cpp"

// int sum( const Triangular &trian ){
//   int beg_pos = trian._beg_pos();
//   int length = trian.length();
//   int sum = 0;
//   for( int ix = 0; ix < length; ++ix )
//     sum += trian.elem( beg_pos + ix );
//   return sum; 
// }
int sum( const Triangular &trian ){
  if( !trian.length() )
    return 0;

  int val, sum = 0;
  trian.next_reset();
  while( trian.next( val ) ){
    sum += val;
  }
  return sum;
}


int main(){
  const Triangular trian();
  int s = sum( trian );
  return 0;
}