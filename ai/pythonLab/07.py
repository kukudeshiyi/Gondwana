import numpy as np

space=np.array([
    [[5,4,8],[5,9,2],[4,5,3]],
    [[4,9,6],[2,2,5],[4,3,4]],
    [[4,2,1],[7,6,3],[4,6,5]]
])
print(space[0,0,0])

space1=np.array([
    [[5,4,8],[5,9,2],[4,5,3]],
    [[4,9,6],[2,2,5],[4,3,4]],
    [[4,2,1],[7,6,3],[4,6,5]]
                ])
print(space1[[0,0,1],[0,1,2],[0,0,2]])


space2=np.array([
    [[5,4,8],[5,9,2],[4,5,3]],
    [[4,9,6],[2,2,5],[4,3,4]],
    [[4,2,1],[7,6,3],[4,6,5]]
            ])
print(space2[:1,:1,:2])
print(space2[:1,:,:])
print(space2[:1,1:2,:])

row=['美的','格力','海尔','西门子']
data=np.array([[3800,1,15],[4000,8,20],[5000,2,30],[4000,20,50]])
bool_list=[False,False,True,False]
print(data[bool_list])

score = np.array([69,80,90,40,60,20,90,94,90,99])
con = score > 60
print(con)
print(score[con])
print(np.where(con))

score1=np.array([69,80,90,40,60,20,90,94,90,99])#学生的成绩
score1[:3]=0
print('修改切片对象成绩后的Score为',score1)
score2=[69,80,90,40,60,20,90,94,90,99]
score2_list=score2[:3]
score2_list=0
print('修改Score1_list后的Score1为',score2, score2_list)
