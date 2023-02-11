#include<vector>
#include "num_sequence.hpp"

const int num_sequence::num_seq;
std::vector<std::vector<int> > num_sequence::seq( num_seq );

num_sequence::PtrType num_sequence::func_tb1[ num_seq ] = 
{
  0,
  &num_sequence::fibonacci,
  &num_sequence::pell,
  &num_sequence::lucas,
  &num_sequence::triangular,
  &num_sequence::sequare,
  &num_sequence::pentagonal,
};

int num_sequence::elem( int pos ){
  if( ! check_integrity( pos ) ){
    return 0;
  }
  if( pos > _elem->size() )
    (this->*_pmf)( pos );
  return (*_elem)[ pos-1 ];
}