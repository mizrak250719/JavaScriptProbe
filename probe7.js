function isNumber(value) {

    if (typeof value !== "number") {
        return false;
    }

    if (Number.isNaN(value)) {
        return false;
    }

    return true;
}


console.log(isNumber(42));     // true
console.log(isNumber(NaN));    // false
console.log(isNumber("42"));   // false
console.log(isNumber(-5));     // true
console.log(isNumber(0));      // true
console.log(isNumber(true));   // false