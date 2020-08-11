const number = [5, 10, -15, 14, -25, 28, -30, 55, -40, -45, 67, 88, 99];
const output = [];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > 40) {
        break;
    }
    output.push(element);
}
console.log(output);

const numbers = [5, 10, -15, 14, -25, 28, -30, 55, -40, -45, 67, 88, 99];
const outputs = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) {
        continue;
    }
    outputs.push(element);
}
console.log(outputs);