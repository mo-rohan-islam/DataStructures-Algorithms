function hasPairWithSum(arr, sum) {
    var len = arr.length;
    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log(`${arr[i]} at ${i} and ${arr[j]} at ${j}`)
                return true;
            }
            
        }
    }
    return false;
}

console.log(hasPairWithSum([1,2,3,5,9], 8))
console.log(hasPairWithSum([6,4,3,2,1,7], 9))

console.log('=========================================') 

function hasPairWithSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[i])) {
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

console.log(hasPairWithSum2([1,2,3,5,9], 8))
console.log(hasPairWithSum2([6,4,3,2,1,7], 9))
