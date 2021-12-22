const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(10000).fill('nemo');

function findNemo(array) {
    // let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
        }
    }
    // let t1 = performance.now();
    // console.log('Call too find Nemo took ' + (t1-t0)
    // + ' milliseconds');
}

// findNemo(everyone);    // O(n) --> Liner Time

// nemo array // O(1) -- 1 element 
// everyone array // O(10) -- 10 elements

const findNemo2 = array => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found NEMO!');
        }
    })
}

const findNemo3 = array => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

findNemo2(everyone)
findNemo3(everyone)

// ==============================================================

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]);
    console.log(boxes[1]);
}

// logFirstTwoBoxes(boxes);            // O(1) -- constant time ( same number of operation 
//         irrespective of the number of element in the

// ==================================================================

function funChallenge(input) {
    let a = 10;   // O(1)
    a = 50 + 3;   // O(1)

    for (let i = 0; i < input.length; i++) {    // O(n)
        anotherFunction();      // O(n)
        let starnger = true;    // O(n)
        a++;                    // O(n)
    }
    return a;   // O(1)
}

// funChallenge()                                   

// BIG O(3 + 4n)    ~ O(n)

// ===============================================================

function anotherFunChallenge(input) {
    let a = 5;      // O(1)
    let b = 10;     // O(1)
    let c = 50;     // O(1)
    for (let i = 0; i < input; i++) {       // O(n)
        let x = i + 1;      // O(n)
        let y = i + 2;      // O(n)
        let z = i + 3;      // O(n)
    }
    for (let j = 0; j < input; j++) {       // O(n)
        let p = j * 2;      // O(n)
        let q = j * 2;      // O(n)
    }
    let whoAmI = "I don't know";    // O(1)
}

// BIG O(4 + 5n)    or BIG O(4 + 7n)    ~ O(n)

// ============================================================

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');      
    }
}

// O(n)

// ========================================================

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);        
    });
}

// O(a + b)

// =====================================================

const boxes2 = [1,2,3,4,5];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

// logAllPairsOfArray(boxes2)

// O(n^2)

// ===================================================

function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
      console.log(number);
    });
  
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) {
        console.log(firstNumber + secondNumber);
      });
    });
}
  
// printAllNumbersThenAllPairSums([1,2,3,4,5])

// O(n + n^2)  ~   O(n^2)

// =====================================================

function boooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('booooo!');
    }
}

// boooo([1,2,3,4,5])      // O(1)

// =====================================================

function arrayOfHiNTimes(n) {
    let hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

// console.log(arrayOfHiNTimes(6))

// =====================================================

// Find 1st, Find Nth...
const array = ['hi', 'my', 'teddy'];
// console.log(array[0]);
// console.log(array[array.length-1])

const array2 = [
    {
        tweet: 'hi',
        date: 2012
    },
    {
        tweet: 'my',
        date: 2016
    },
    {
        tweet: 'teddy',
        date: 2018
    }
]

// ======================================================

// console.log('abcdefghijklmnopqrstuvwxyz'.length);

