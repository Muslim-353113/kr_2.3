function extractNumbers(str) {
    return str.match(/\d/g)?.map(Number) || [];
}
console.log(extractNumbers("a1fg5hj6"));