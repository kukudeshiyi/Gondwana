import pandas as pd

price = pd.Series([5,4,2,6],index=["1",'2','3','4'])
print(price)

gongzi=pd.DataFrame({'基础工资':[6000,4000,3000],
'绩效':[500,500,0],
'是否全勤':['是','是','否'],
'请假天数':[0,0,5],
'总工资':[6500,4500,3000]},
index=['厨师','前台','服务员'])  
print(gongzi)


names=["张三","李四"]  
exems=["期中","期末"]  
columns = ["语文","数学"]  
index=pd.MultiIndex.from_product([names,exems])  
dic={'语文':[60,90,100,99],'数学':[30,40,90,100]}  
Score=pd.DataFrame(data=dic,index=index)  
print(Score)

import matplotlib.pyplot as plt  
data=[90,96,98,80,95,100]  
Score=pd.Series(data,index=range(6),name="test table")  
print(Score)





