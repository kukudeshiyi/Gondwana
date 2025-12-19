import pandas as pd

data = [
  [9000, 500, "Y", 0, 500],
  [8000, 500, "Y", 0, 500],
  [4000, 600, "N", 0, 500],
]

money = pd.DataFrame(data=data, 
columns=['基础工资', '绩效', '是否全勤', '请假天数', '总工资'],
index=['厨师', '前台', '服务员'])
print(money)
print(money.shape)
print(money.index)
print(money.columns)
print(money.values)
print(money.dtypes)

