const number = [10, 5, 25, 15, 88, 75, 99];

const part = number.slice(1, 4);        //which number i call,,,,this number is show.also main number all same..
console.log(part);
console.log(number);

const remove = number.splice(3, 6, 55, 65, 90);     //which number i call this number is show but another number is remove with main value number....and i can another number add with splice
console.log(remove);
console.log(number);

const add = number.join(',');
console.log(add);

const add2 = number.join(' ');
console.log(add2);