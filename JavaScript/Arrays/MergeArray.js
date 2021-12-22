const mergeSortedArrays = (array1, array2) => {

    //Check input
    if (array1.length === 0) {
        return array2
    }
    if (array2.length === 0) {
        return array1
    }
    
    let array1Item = array1[0]
    let array2Item = array2[0]
    mergedArray = []
    let i = 1, j = 1

    while (array1Item || array2Item) {
        if (!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++;
        } 
        else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]))
console.log(mergeSortedArrays([1,2,4,5], [7,8,10,23]))