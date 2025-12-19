import numpy as np

# one dimension
score = [1,2,3,4,5,6]
print(score[0:2])

score1 = np.array([69,80,90,40,60,20,90,94,90,99])
print(score1[[0,3,4]])
print(score1[[-1]])

score2=np.array([69,80,90,40,60,20,90,94,90,99])
print(score2[[0,1,2,3,4,5,6,7,8]])
print(score2[:9])

score3=np.array([69,80,90,40,60,20,90,94,90,99])  
print(score3[3:])

score4=np.array([69,80,90,40,60,20,90,94,90,99])
print(score4[[1,3,5,7,9]])
print(score4[1::3])




