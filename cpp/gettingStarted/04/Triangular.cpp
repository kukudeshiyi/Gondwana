#include<iostream>
#include<vector>
#include "Triangular.hpp"

const int arr[8] = {
  1,2,3,4,5,6,7,8
};

std::vector<int> Triangular::_elems( arr, arr+8 );

Triangular::Triangular()
{
  _length = 1;
  _beg_pos = 1;
  _next = 0;
}

int Triangular::elem( int pos ) const
{
  return _elems[ pos - 1 ];
}

bool Triangular::next( int &value )
{
  if( _next < _beg_pos + _length - 1 ){
    value = _elems[ _next++ ];
    return true;
  }
  return false;
}

Triangular& Triangular::copy( const Triangular &rhs )
{
  if( this != &rhs ){
    _length = rhs._length;
    _beg_pos = rhs._beg_pos;
    _next = rhs._beg_pos - 1;
  }
  return *this;
}

void Triangular::gen_elems_to_value( int value ){
  int ix = _elems.size();
  if( !ix ){
    _elems.push_back( 1 );
    ix = 1; 
  }
  while( _elems[ ix - 1 ] < value && ix < _max_elems ){
    ++ix;
    _elems.push_back( ix*(ix+1)/2 );
  }
  if( ix == _max_elems ){
    std::cerr << "err" << std::endl;
  }
}

void Triangular::gen_elements( int length ){
  if( length < 0 || length > _max_elems ){
    std::cerr << "err" << std::endl;
  }
  if( _elems.size() < length )
  {
    int ix = _elems.size() ? _elems.size() + 1 : 1;
    for( ; ix < length; ++ix )
      _elems.push_back( ix*( ix+1 )/2);
  }
}

bool Triangular::is_elem( int value ){
  if( ! _elems.size() || _elems[ _elems.size()-1 ] < value )
    gen_elems_to_value(value);
  std::vector<int>::iterator found_it;
  std::vector<int>::iterator end_it = _elems.end();

  found_it = find( _elems.begin(), end_it, value );
  return found_it != end_it;
}

void Triangular::display( int length, int beg_pos, std::ostream &os = std::cout)
{
  for( int ix = 0; ix < _elems.size(); ++ix ){
    os << _elems[ix] << "\n";
  }
}