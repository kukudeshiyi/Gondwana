import numpy as np

Score=np.array([[69 ,70] ,[80 ,92], [90, 63],[40, 20],[60, 50],[20, 96],[90, 33],[94 ,44],[90, 55],[99 ,30]])#学生前后两次的成绩表  
Score_F=np.array([69,80,90,40,60,20,90,94,90,99])#第一次成绩  
Score_S=np.array([70,92,63,20,50,96,33,44,55,30])#第二次成绩  
Score_chaju=np.subtract(Score_F,Score_S)  
print('查看两次成绩的差距：',Score_chaju)
print('求两次成绩的和',np.add(Score_F,Score_S))
print('第一次成绩的0.6加第二次成绩的0.4',np.add(np.multiply(Score_F,0.6),np.multiply(Score_S,0.4)))
print('百分制转换成十分制',np.divide(Score,10))
print('查看两次成绩的差距，差距以正数显示',np.abs(Score_chaju))
print('对浮动的数值进行开方，放缩：',np.sqrt(np.abs(Score_chaju)))
print('求浮动值的4次幂',np.power(np.abs(Score_chaju),4))

print('张三和李四的最高分',Score.max(axis=0))  
print('张三和李四的最低分',Score.min(axis=0))
print('最大值下标为：',Score.argmax(axis=0))  
print('最小值下标为：',Score.argmin(axis=0))
Score[[9,5],[0,1]]=0  
Score[[5,3],[0,1]]=0  
print(Score)
print('张三李四的平均成绩为：',Score.mean(axis=0))
print('张三和李四成绩的标准差为:',Score.std(axis=0))  
print('张三李四的方差为：',Score.var(axis=0))
r=2  
area=np.pi*np.square(r)  
print(area)
print(np.e)