def hasPairWithSum(array, sum):
    for element in array:
        for element2 in array:
            if (element + element2 == sum):
                print(f'{element} & {element2}')
                return True
    return False

print(hasPairWithSum([1,2,3,5,9], 8))
print(hasPairWithSum([1,2,3,5,9], 13))

def hasPairWithSum2(array, sum):
    dict = {}
    for element in array:
        if element in dict:
            return True
        dict[sum - element] = True
    return False

print(hasPairWithSum2([6,4,3,2,1,7], 9))
print(hasPairWithSum2([1,2,3,5,9], 13))
