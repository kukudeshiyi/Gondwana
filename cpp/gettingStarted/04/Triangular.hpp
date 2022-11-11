class Triangular{
  public:
    Triangular();
    Triangular( int len );
    Triangular( int len = 1, int bp = 1 )
    {
      _length = len > 0 ? len : 1;
      _beg_pos = bp > 0 ? len : 1;
      _next = _beg_pos - 1;
    }
  private:
    int _length;
    int _beg_pos;
    int _next;
}