const student = [
    {id : 24, name : 'rakiB'},
    {id : 36, name : 'bikAsh'},
    {id : 45, name : 'shawOn'},
    {id : 60, name : 'mohIudDin'}
];
const studentName = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i];                         //1st way with for looF
    const allName = element.name;
    studentName.push(allName);
}
console.log(studentName);

const name = student.map(element => element.name);        //2nd way with array function
console.log(name);

const ids = student.map(x => x.id);
console.log(ids);

const bigger = student.filter(s => s.id < 40);             //filter work
console.log(bigger);

const find = student.find(f => f.id > 40);                  //find work 
console.log(find);