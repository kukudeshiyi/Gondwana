#include "Triangular1.hpp"

Triangular::Triangular()
{
  _length = 1;
  _beg_pos = 1;
  _next = 0;
}
Triangular::Triangular( int len )
{
  _length = len;
  _beg_pos = 1;
  _next = 0;
}