const ReverseString = (input) => {
    let output = []
    for (let j = input.length-1, i=0; j >= 0; j--, i++) {
        output[i] = input[j]
    }
    console.log(output)
    return output.join('')
}

console.log(ReverseString('Hi, My name is Rohan'))

function reverse(str) {
    //check input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Hmmm that\'s not good'
    }

    const backwards = [];
    const totalItems = str.length-1
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i])
    }
    console.log(backwards)

    return backwards.join('')
}

console.log(reverse('Hi, she\'s my mother'))


function reverse2(str) {
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Hmmm that\'s not good'
    }
    
    return str.split('').reverse().join('')
}

console.log(reverse2('Hi, she\'s my mother'))

const reverse3 = str => [...str].reverse().join('')

console.log(reverse3('Hi, she\'s my mother'))