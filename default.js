function add(num1, num2 = 20) {
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(12, 3);
console.log(total);