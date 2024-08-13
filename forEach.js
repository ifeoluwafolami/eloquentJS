function filter(array, test) {
    let passed = [];
    for (let element of array) {
      if (test(element)) {
        passed.push(element);
      }
    }
    return passed;
  }
  
function filterIfe(array, test) {
    let passed = [];
    array.forEach(element => test(element) ? passed.push(element) : null);
    return passed;
}