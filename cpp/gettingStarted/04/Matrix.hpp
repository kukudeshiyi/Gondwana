#include<string>

class Matrix{
  public:
    std::string _name;
    Matrix( std::string name, int row, int col )
      :_name( name ),_row( row ),_col( col )
    {
      _pmat = new double[ row * col ];
    }
    Matrix( Matrix &rhs );
    ~Matrix()
    {
      delete [] _pmat;
    }
  private:
    int _row, _col;
    double* _pmat;
};