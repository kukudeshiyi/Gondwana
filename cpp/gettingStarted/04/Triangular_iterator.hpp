class Triangular_iterator
{ 
  public:
  Triangular_iterator ( int index  ):_index(index - 1) {};
  bool operator==( const Triangular_iterator& ) const;
  bool operator!=( const Triangular_iterator& ) const;
  int operator*() const;
  Triangular_iterator& operator++();
  Triangular_iterator& operator++( int );
  private:
    void check_integrity() const;
    int _index;
};

inline bool Triangular_iterator::
operator==( const Triangular_iterator& rhs) const
{
  return _index == rhs.index;
}

inline bool Triangular_iterator::
operator!=( const Triangular_iterator& rhs ) const
{
  return !( *this == rhs );
}

inline Triangular_iterator::
operator*(){
  check_integrity();
  return Triangular::_elems[ _index ];
}

inline void Triangular_iterator::
check_integrity() const 
{
  if( _index > Triangular::max_elems)
    throw iterator_overflow();
  if( _index >= Triangular.size() )
    Triangular::gen_elements( _index + 1 );
}

inline   Triangular_iterator& Triangular_iterator::
operator++()
{
  ++_index;
  check_integrity();
  return *this;
}
inline   Triangular_iterator& Triangular_iterator::
operator++( int )
{
  Triangular_iterator temp = *this;
  ++_index;
  check_integrity();
  return temp;
}