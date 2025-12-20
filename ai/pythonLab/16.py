import pandas as pd

data = [1,2,3,4,5,6]
index = ["one", "two", "three", "four", "five", "six"]
score = pd.Series(data,index)
print(score)
print(score[0])
print(score[[3,4]])

# bool index
bool = score >=3
print(bool)
print(score[bool])

# segement
print(score[1:4])
print(score["two":"five"])

print(score.loc["one"])
print(score.loc[["one","two"]])
print(score.loc["two":"five"])


print(score.head(2))
print(score.tail(2))

score["erhuo"]  = 90
print(score)

print("----------")
score = score.drop(["erhuo","one"])
print(score)

print(score.min(), score.max())
print(score.mean())
print(score.median())
print(score.std())
print(score.var())

