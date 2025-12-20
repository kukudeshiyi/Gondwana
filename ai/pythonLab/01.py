import numpy as np
import time

# fruitPrice = np.array([5,4,3,2])
# fruitPrice = fruitPrice + 1
# print(fruitPrice)

arr = np.random.rand(100000)
start_time = time.time()
arr_squared = arr ** 2
print("numpy 平方运算的时间:", time.time() - start_time)

start_time = time.time()
arr_squared = []
for i in range(len(arr)):
  arr_squared.append(arr[i] ** 2)
print("循环平方运算时间", time.time() - start_time)