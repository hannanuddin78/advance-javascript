const number = [5, 6, 7, 8, 9, 10];
const output =[];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const numberResult = element * element;
    output.push(numberResult);
}

console.log(output);

// const number = [5, 6, 7, 8, 9, 10];

function squEre (element) {
    return element * element;
}

number.map(function (element, index, array) {
    console.log(element, index, array);
})

const result = number.map(function (element){
    return element * element;
})
console.log(result);

const numbers = [7, 8, 9, 10];
const numbersResult = numbers.map(element => element * element)
console.log(numbersResult);

const bigger = number.filter(x => x < 5);
console.log(bigger);