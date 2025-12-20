#include <emscripten/val.h>
#include <stdio.h>

using namespace emscripten;

int main() {
  //访问 JavaScript 全局对象 myObj
  val myObj = val::global("document");
  //调用 JavaScript 全局对象 myObj 的 hello 方法，并向该方法传递两个参数。
  val c = myObj.call<void>("createElement",val("br"));
  myObj.call<void>("appendChild",val(c));
  printf("All done!\n");
}
