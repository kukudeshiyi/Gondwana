import numpy as np  

Score1=np.array([[38,90,78],[46,66,98],[65,100,55],[46,26,32],[88,45,65]])  
Score2=np.array([[38,96,78],[55,76,98],[40,45,99],[46,67,45],[78,30,65]])  
print('不同同学两次成绩的和为：',Score1+Score2)  
print('不同同学两次成绩的为差：',Score1-Score2)  
print('不同同学两次成绩的商为：',(Score1/Score2).astype(float))  
print('不同同学两次成绩的积为：',Score1*Score2)
print('对第一次同学的成绩进行取余2为:',Score1%2)

print('查看成绩是否下降：',Score1>Score2)  
print('查看成绩是否上升：',Score1<Score2)  
print('查看成绩是否持平，无波动：',Score1==Score2)
print('查看成绩是否持平，无波动：',Score1!=Score2)