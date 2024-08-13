function countBs(string) {
    let bCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'B') {
            bCount++;
        }
    }
    return bCount;
}

console.log(countBs("BOBby"));

function countChar(string, char) {
    let charCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            charCount++;
        }
    }
    return charCount;
}

console.log(countChar("kakkerlak", "k"));