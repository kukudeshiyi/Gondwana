import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# data = {'日期': ['1-Jan-20',
#                 '8-Jan-20',
#                 '15-Jan-20',
#                 '22-Jan-20',
#                 '29-Jan-20',
#                 '5-Feb-20',
#                 '12-Feb-20',
#                 '19-Feb-20',
#                 '26-Feb-20',
#                 '4-Mar-20'],
#         '数量': [0.7,0.5,0.4,0.3,0.7,0.9,0.1,0.2,0.4,0.8]}
# df = pd.DataFrame(data)
# df.to_excel('test1.xlsx', index=False)



plt.rcParams['font.family'] = 'Microsoft YaHei'
plt.rcParams['axes.unicode_minus'] = False

df = pd.read_excel('./test1.xlsx', names = ['time', 'SSTA'])

X = df['time']
Y = df['SSTA']

c = 0.5

y_above = np.zeros(Y.shape[0])
y_below = np.zeros(Y.shape[0])

for i in range(Y.shape[0]):
  if abs(Y[i]) >= c:
      y_above[i] = Y[i]
  else:
      y_below[i] = Y[i]

plt.tight_layout()
plt.title('气温数据图')
plt.xlabel('Time')
plt.xticks(rotation=60, fontsize=6)
plt.ylabel('SSTA')
plt.bar(X, y_above, width=5.0, color = 'red', label = 'above average')
plt.bar(X, y_below, width=5.0, color = 'grey', label = 'below average')
plt.axhline(y=c, color='black', linestyle=':')
plt.savefig(r"./test1.png")
print("柱状图生成成功！请在目录中查看")