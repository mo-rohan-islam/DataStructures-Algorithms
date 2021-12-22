const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']

function findCommon3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

console.log(findCommon3(array1, array2))


// =====================================

const findCommon2 = (arr1, arr2) => {
    // loop through first array and create object where properties === items in array
    let map = {}
    for (let i = 0; i < arr1.length; i++) {
        if (! map[arr1[i]]) {
            const item = arr1[i]
            map[item] = true
        }
    }
    // console.log(map)

    // loop through second array and check if 
    for (const element of arr2) {
        if (map[element]) {
            // console.log(`Found ${element}!`)
            return true;
        }
    }
    // console.log(`${element} Not found!`)
    return false;
}   // O(a + b) Time
    // O(a)     Space   (map)

// console.log(findCommon2(array1, array2))

// ======================================


const findCommon = (array1, array2) => {
    for (const element1 of array1) {
        for (const element2 of array2) {
            if (element1 === element2) {
                return true;
            }
        }
    }
    return false;
}       // O(a*b)   time
        // O(1)     space

// console.log(findCommon(array1, array2))

