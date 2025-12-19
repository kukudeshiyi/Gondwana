import numpy as np

Score=np.array([[98,89],[64,90],[60,56],[92,78],[32,45],[48,30]])  
Score60=Score>60
Score_bool=np.all(Score60,axis=1)  
print(Score60)
print(Score_bool)
print(Score[Score_bool])
Score_bool1=np.all(Score60,axis=0)  
print(Score_bool1)

Score90=Score>90  
Score_bool=np.any(Score90,axis=0)  
print(Score_bool)

Score_math=np.array([98,64,60,92,32,48])  
print(np.where(Score_math>60))