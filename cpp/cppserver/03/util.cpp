#include <stdio.h>
#include <stdlib.h>
#include "util.h"

void errif(bool err, const char* msg){
  if(err){
    perror(msg);
    exit(EXIT_FAILURE);
  }
}