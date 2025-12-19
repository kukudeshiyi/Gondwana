import pandas as pd
import numpy as np
dataArr= np.array([93,92,91,90])
dataList = [93,92,91,90]
index = ["1", "2", "3", "4"]
scoreArr = pd.Series(dataArr, index)
scoreList = pd.Series(dataList, index)

scoreArr["1"] = 80
scoreList["1"] = 80

print('scoreArr', dataArr)
print('scoreList', dataList)

data = {"1":90,"2":78}
index = ["2","3"] # the series only has the elements these are same as data map.
scoreMap = pd.Series(data,index)
print(scoreMap)
print("4" in scoreMap)
print("4" not in scoreMap)
print(scoreMap.size)
print(scoreMap.dtype)
print(scoreMap.index)
print(scoreMap.values)
print(scoreMap/2)