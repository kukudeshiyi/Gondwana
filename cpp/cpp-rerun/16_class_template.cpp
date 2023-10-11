#include<iostream>
#include<vector>
#include<string>

template<typename T>
class KeyValPair
{
  public:
    std::string key;
    T value;
    KeyValPair(std::string k, T v): key{k}, value{v} {}
};

template<typename T>
class Dic
{
  public:
    Dic() = default;
    std::vector<KeyValPair<T>> vec;
    void pushBack(KeyValPair<T> val){
      vec.push_back(val);
    }
    int operator[](std::string key){
      for(KeyValPair<T>& pair: vec){
        if(pair.key == key){
          return pair.value;
        }
      }
      return -1;
    }
};

int main(){
  Dic<int> dic;
  dic.pushBack({"test1", 123});
  dic.pushBack({"test2", 456});
  dic.pushBack({"test3", 789});
  std::cout << dic["test1"] << std::endl;
}