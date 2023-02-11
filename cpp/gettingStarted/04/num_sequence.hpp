#include<vector>

class num_sequence {
  public: 
    typedef void (num_sequence::*PtrType) ( int );
    
    void fibonacci( int );
    void pell( int );
    void lucas ( int );
    void triangular ( int );
    void sequare ( int );
    void pentagonal ( int );
    
    int elem ( int pos );

  private:
    std::vector<int>* _elem;
    PtrType _pmf;
    static const int num_seq = 7;
    static PtrType func_tb1[ num_seq ];
    static std::vector<std::vector<int> > seq;
}