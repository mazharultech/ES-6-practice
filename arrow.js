// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(50);
// console.log(result);
const doubleIt = function multi(num) {
    return num * 2;
}
const result = doubleIt(40);
console.log(result);
const add = num => num * 2;
const total = add(300);
console.log(total);

const addNum = (x, y) => x + y;
const result2 = addNum(25, 50);
console.log(result2);

const give5 = () => 5;
const result3 = give5();
console.log(result3);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(100, 8);
console.log(result4);


const doMath2 = (x, y, z) => {
    const sum = x + y + z;
    const diff = x + y - z;
    const multi = x * y * z;
    const result = sum * diff / multi;
    return result;
}
const result5 = doMath2(23, 34, 56);
console.log(result5);