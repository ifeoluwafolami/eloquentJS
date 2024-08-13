function deepEqual (value1, value2) {
    if (!(typeof(value1) === typeof(value2) && typeof(value1) === "object" && value1 !== null && value2 !== null)) {
        return value1 === value2;
    }

    // console.log(Object.keys(value1));
    // console.log(Object.keys(value2));

    if (Object.keys(value1).length == Object.keys(value2).length) {
        for (let i = 0; i < Object.keys(value1).length; i++) {
            if (!(typeof(Object.values(value1)[i]) == typeof(Object.values(value2)[i]) && typeof(Object.values(value1) == "object"))) {
                console.log("Hi");
                return deepEqual(Object.values(value1)[i], Object.values(value2)[i]);
            }

            return Object.values(value1)[i] === Object.values(value2)[i];
        }
    }

}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
