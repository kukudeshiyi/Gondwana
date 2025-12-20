
import pandas as pd
import numpy as np

# table = pd.DataFrame(
#   {
#     "open":[
# 			14.322,
#       14.472,
#       14.592,
#       14.852,
#       14.912,
#       14.772,
#       14.602,
#       14.792,
#       14.912,
#       15.132,
#       15.212,
#       15.592,
#       15.626,
#     ],
#     "close":[
# 			14.552,
#       14.532,
#       15.022,
#       14.802,
#       14.932,
#       14.602,
#       14.892,
#       14.942,
#       15.032,
#       15.162,
#       15.662,
#       15.452,
#       15.162,
#     ],
#     "high":[
# 			14.652,
#       14.832,
#       15.022,
#       15.152,
#       15.072,
#       14.892,
#       14.892,
#       15.072,
#       15.132,
#       15.312,
#       15.682,
#       15.642,
#       15.432,
#     ],
#     "low":[
# 			14.192,
#       14.422,
#       14.592,
#       14.722,
#       14.792,
#       14.412,
#       14.512,
#       14.742,
#       14.802,
#       14.992,
#       15.112,
#       15.302,
#       14.982,
#     ],
#     "volume":[
# 			909890,
#       1031377,
#       1407602,
#       1013572,
#       957092,
#       954236,
#       680251,
#       657133,
#       722415,
#       988216,
#       1373193,
#       896162,
#       867756,
#     ],
#     "code":[
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#       1,
#     ],
#   }
# )
# table = table.reset_index(drop=True)
# table.to_csv("./test2.csv")
# table = pd.read_csv("./test2.csv")
# print(table1)

# data = np.loadtxt("./test2.csv", dtype="float", delimiter=",", skiprows=1)
# print(data.shape)

data = np.genfromtxt("./test2.csv", dtype="float32", delimiter=',', skip_header=1)
print(data.shape, data.dtype)

data1 = data[:,:5]
print(data1.shape)

close = data[...,1]
print(close)

def MinMaxData(data):
  min = np.min(data)
  max = np.max(data)
  MinMax = (close - min) / (max - min)
  return MinMax

MinMaxClose = MinMaxData(close)
print(MinMaxClose)

aver = np.average(data1, axis = 0)
print(aver)

minStock = np.min(data1[...,3])
maxStock = np.max(data1[...,2])
print(maxStock, minStock)

minStock1=np.std(data1[-100:,...],axis=0)  
maxStock1=np.var(data1[-100:,...],axis=0)  
print(maxStock1, minStock1)

close=data1[...,1]  
volume=data1[...,4]  
aver=np.average(close,weights=volume)  
print(aver)

ogc=np.where(data1[:,0]>data1[:,1])  
ogcStock=data1[ogc]  
olc=np.where(data1[:,0]<=data1[:,1])  
olcStock=data1[olc]  
print(ogc, olc)
print('开盘价格大于收盘价格的天数{}，低于收盘价格的天数{}'.format(len(ogcStock),len(olcStock)))

					
					
					
					
					
					
					
					
					
					
					
					
					