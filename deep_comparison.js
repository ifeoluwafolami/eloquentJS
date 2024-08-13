function deepEqual(val1, val2) {
    if (typeof val1 === typeof val2 && typeof val1 !== "object") {
        return val1 === val2;
    } else if (typeof val1 === typeof val2 && typeof val1 === "object" && val1 !== null && val2 !== null) {
        if (Object.keys(val1).length === Object.keys(val2).length) {
            for (let i = 0; i < Object.keys(val1).length; i++) {
                let key = Object.keys(val1)[i];

                if (!deepEqual(val1[key], val2[key])) {
                    return false;
                }
            }
            return true; // Move this to outside the loop to check all keys
        }
        return false;
    }
    return false;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // true

console.log(deepEqual(obj, {here: 1, object: 2})); // false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // true
