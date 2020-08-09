let dusMan;
console.log(dusMan);                        //it is undefined

function name(num1, num2) {
    console.log(num1 + num2);
                                            //not call return so it is undefined
}
let result = name(20, 40)
console.log(result);

function add(num1, num2) {
    console.log(num1 + num2);
    return ;                                       //not call which return so it is undefined
}
let addResult = add(20, 40)
console.log(addResult);

function addNumber(num1, num2) {
    console.log(num1, num2);
    return num1, num2;                                //not call num1 value so it is undefined
}
let addNumResult = addNumber(20)
console.log(addNumResult);

let premIk = {name : "kariM", phone :3564678}
console.log(premIk.gf);