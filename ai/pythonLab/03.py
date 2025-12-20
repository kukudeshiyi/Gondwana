import numpy  as np

arr = np.array([[1,2,3],[4,5,6]])
print('shape', arr.shape)
print('ndim', arr.ndim)
print('size', arr.size)
print('size', arr.dtype)
arr=arr.astype('float')  
print('强制转化之后数据类型',arr.dtype)

grade = np.dtype([('name','S32'),('age','i'),('chinese','f'),('math', 'f'),('english','f')])
grades = np.array([
  ('jack', 1,2,3,4),
  ('tom', 1,2,3,4),
  ('joke', 1,2,3,4),
])

print(grades)