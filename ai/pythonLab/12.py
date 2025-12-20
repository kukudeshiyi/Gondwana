import numpy as np

fruits = np.array([[5,4,3]])
increase_price = np.array([[1,1,1]])
radio = np.array([1.5,0.75,3])
print(fruits + increase_price )
print(fruits + 1)
print(fruits * radio)

arr = np.array([1,2,3,4,5,6])
arr1 = np.reshape(arr,(2,3))
arr2 = arr[np.newaxis,:]
arr3 = arr[:,np.newaxis]
print(arr1)
print(arr2)
print(arr3)

jinshu = np.array([[2],[3],[1]])
print('水果的总价格为:\n',fruits@jinshu)  
print('水果的总价格为:\n',np.dot(fruits,jinshu))

jinshu1=np.array([2,3,1])
print('np.matmul，水果的总价格为:\n',np.matmul(fruits,jinshu1))