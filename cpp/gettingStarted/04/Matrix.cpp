#include "Matrix.hpp"
Matrix::Matrix( Matrix &rhs )
: _name( rhs._name ),_row( rhs._row ),_col( rhs._col )
{
  int elem_cnt = _row * _col;
  _pmat = new double[ elem_cnt ];
  
  for( int ix = 0; ix < elem_cnt; ++ix ){
    _pmat[ ix ] = rhs._pmat[ ix ];
  }
}