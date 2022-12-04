#include<vector>
#include<iostream>
class Triangular{
  public:
    Triangular();
    Triangular( int len );
    Triangular( int len, int bp )
    {
      _length = len > 0 ? len : 1;
      _beg_pos = bp > 0 ? len : 1;
      _next = _beg_pos - 1;
    }
    int length()  const { return _length; }
    int beg_pos() const { return _beg_pos; }
    int elem ( int pos ) const;

    bool next( int &val );
    void next_reset() { _next = _beg_pos - 1; }

    Triangular& copy( const Triangular &rhs );

    static bool is_elem( int );
    static void gen_elements( int length );
    static void gen_elems_to_value( int value );
    static void display( int length, int beg_pos, std::ostream &os);
  private:
    mutable int _length;
    int _beg_pos;
    int _next;

    static const int _max_elems = 1024;
    static std::vector<int> _elems;
};