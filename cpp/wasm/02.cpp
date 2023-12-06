#include <emscripten/bind.h>
#include <string>

std::string getStr(double a,double b){
    return "World!" + std::to_string(a*b);
}

EMSCRIPTEN_BINDINGS(myModule) {
    emscripten::function("getStr", &getStr);
}