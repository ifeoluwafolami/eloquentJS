let lineNumber = 1;
let lineElementNumber = 1;
let size = 8;

while (lineNumber <= size) {
    // console.log(lineNumber);
    let lineString = "";
    for (let i = 0; i < size; i++) {
        if (lineNumber % 2 !== 0) {
            if (i % 2 === 0) {
                lineString += " ";
            }
            else {
                lineString += "#";
            }
        }
        else {
            if (i % 2 !== 0) {
                lineString += " ";
            }
            else {
                lineString += "#";
            }
        }
    }
    console.log(lineString);
    lineNumber++;
}