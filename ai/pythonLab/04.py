import numpy as np

arr = np.zeros((3,4))
print(arr)

arr1 = np.ones((4,3))
print(arr1)
print(arr1.dtype)

arr2 = np.empty((3,1))
print(arr2)

arr3 = np.eye(5)
print(arr3)


arr4 = np.array([1,2,3,4])
arr5 = np.array(arr4)
arr6 = np.asarray(arr4)
arr7 = np.copy(arr4)
arr4[0] = 666
print(arr5)
print(arr6)
print(arr7)

arr8 = np.linspace(0,100,5)
arr9 = np.arange(0,100,5)
print(arr8)
print(arr9)

arr10 = np.random.rand(15)
arr11 = np.random.uniform(-100,100,3)
print(arr10)
print(arr11)

arr12 = np.random.normal(60,9,20)
arr13 = np.random.standard_normal((3,4))
print(arr12)
print(arr13)






