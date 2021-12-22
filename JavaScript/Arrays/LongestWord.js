const LongestWord = sen => {

    let word = ""
    let wordArray = []
    for (let i = 0; i < sen.length; i++) {
        // let ch = sen.charCodeAt(i)
        let ch = sen[i]
        // if ( (ch >=65 && ch <=90) || (ch >=97 && ch <=122) || (ch >=48 && ch <=57) ) {
        if ( ch.match(/[A-z0-9]+/) ) {
            // word += String.fromCharCode(ch)
            word += ch
        }
        // if (String.fromCharCode(ch) === " " || i === sen.length-1) {
        if ( ch === " " || i === sen.length-1 ) {
            wordArray.push(word)
            word = ""
        }
    }

    let maxLength = 0
    let maxWord = ""
    wordArray.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length
            maxWord = word 
        }
    });

    return maxWord
}

console.log(LongestWord("fun&!! time"))
console.log(LongestWord("I love dogs"))
console.log(LongestWord("Hello world123 567"))

