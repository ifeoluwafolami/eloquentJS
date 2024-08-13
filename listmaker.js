function arrayToList(array) {
    let slicedArray = array.slice(1);
    // console.log(slicedArray);
    if (slicedArray.length === 0) {
        // console.log({value: array[array.length - 1], rest: null});
        return {value: array[array.length - 1], rest: null};
    }
    else {
        // console.log({value: array[0], rest: arrayToList(slicedArray)});
        return {value: array[0], rest: arrayToList(slicedArray)};
    }
    console.log("done");
}

// console.log(arrayToList([10,20]));

function listToArray(list) {
    let array = [];
    array.push(list.value);

    if (list.rest) {
        return array.concat(listToArray(list.rest));
    }

    else{
        return array;
    }
}
// console.log(listToArray(arrayToList([10, 20, 40, 1029, 430])));

function prepend(element, list) {
    return {value: element, rest: list};
}

console.log(prepend(10, prepend(20, null)));

function nth(list, position) {
    position--;
    if (position !== 0) {
        return nth(list.rest, position);
    }
    else {
        return list.value;
    }
}

console.log(nth(arrayToList([10, 20, 30]), 1));