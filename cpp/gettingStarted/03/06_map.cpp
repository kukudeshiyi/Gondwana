#include<iostream>
#include<string>
#include<map>
using namespace std;


int main(){
  map<string,int> words;
  string tword;
  while( cin >> tword ){
    words[tword]++;
    break;
  }
  map<string,int>::iterator it = words.begin();
  for( ; it != words.end(); ++it ){
    cout << "key: " << it->first << ' ' << "value: " << it->second << endl; 
  }
  // 判断 key 在 map 中是否存的的三种方式
  map<string,int> test_map;
  test_map[ "peace" ] = 1;

  // 第一种方法,但是该种做法会将本不存在的 key 添加到 map 中，只是 value 是 0
  if(!test_map[ "ha" ]){
    cout << "ha is not found in test_map" << endl;
  }

  // 第二种方法，map 上的 find 方法
  map<string,int>::iterator map_it = test_map.find("peace");
  if( map_it != test_map.end() ){
    cout << "peace is in test_map" << ' ' << it->second << endl;
  }
  
  // 第三种方法，map 的 count 函数来判断，该函数会返回某个特定项在 map 内的个数
  if( test_map.count( "peace" ) ){
    cout << "peace is in test_map" << endl;
  }
  return 0;
}