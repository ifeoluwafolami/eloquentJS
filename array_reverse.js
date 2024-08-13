function reverseArray(array) {
    revArray = [];
    for (let i=(array.length-1); i >= 0; i--) {
        revArray.push(array[i]);
    }
    return revArray;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));

function reverseArrayInPlace(array) {
    for(let i=0; i < (Math.floor(array.length / 2)); i++) {
        temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);