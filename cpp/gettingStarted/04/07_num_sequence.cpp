#include "num_sequence.hpp";

int main(){
  num_sequence ns;
  const int pos = 8;
  for ( int ix = 1; ix < num_sequence::num_of_sequence(); ++ix ){
    ns.set_sequence( num_sequence::ns_type(ix) );
    int elem_val = ns.elem( pos );
    display( cout, ns, pos, elem_val );
  }
}