// 1
function writeNumber(){
    let num = (+prompt('Введите число больше 0'));
    if( num <= 0){
        return alert('Вы ввели ' + num + ' введите число больше'), writeNumber()
    }
    let result = 0;    
    for(let i = 0; i <= num; i++){
        result += i * i;
    }
    return result
} 
console.log(writeNumber());

// 2

let arr = [3, 5, 12, 9, 23, 93, 17];
let filteredArr = arr.filter(el => el > 2 && el < 20);
let result = 0;
for(let i=0; i < filteredArr.length; i++){
    result += filteredArr[i];
} 
console.log(result);

// 3
// ? так как долго мучался, решил оставить все варианты которые получились  

let arr = [[1, 6, 3, '6'], [10, 15, 13, '10']];

function flatArr(arr){ 
    arr = arr.flat();   
    let result = 0;
    for(const item of arr){
        if(typeof item == 'number'){
            result += item;
        }        
    }
    return result
}
console.log(flatArr(arr));

// ==========================================================



let arr = [[1, 6, 3, '6'], [10, 15, 13, '10']];
arr = arr.flat();

let result = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'number'){
            result += arr[i];
        }
    }

console.log(result);



//4

let obj = {
    name : 'Dima',
    age: '27',
};

function addToObj(key, value, obj) {
    for (const elem in obj) {
        if (elem == key) {
            return "Уже есть"
    }else {
    obj[key] = value;
    return obj
}
    }
};
console.log(addToObj(prompt('Введите название ключа'),prompt('Введите свойство ключа'),obj));



function addToObj(key, value, obj) {
    
        if (obj[key] == undefined) {
            obj[key] = value;
            return obj
        }else {
        return "Уже есть"
    }
};
console.log(addToObj(prompt('Введите название ключа'),prompt('Введите свойство ключа'),obj));


function addToObj(key, value, obj) {
    let b = Object.keys(obj);
    if (b.includes(key) == true) {
        return "Уже есть"
    }else {
        obj[key] = value;
        return obj
}
};
console.log(addToObj(prompt('Введите название ключа'),prompt('Введите свойство ключа'),obj));









// 5
for(let i = 1; i <= 10; i++){
    if(i % 2 == 0 && i % 3 !== 0){
        console.log('Fiz')
    }
    else if(i % 3 == 0){
        console.log('FizBuz')
    } else {
        console.log('Buz')
    }
}

// 6

function factorial(num){
    let resul = 1;
    for(let i=num; i > 0; i--){
      resul *= i;
    }
    return resul
}
console.log(factorial(10));

// 7

const sheetsInReamPaper = 500,
    consumptionPerWeek = 1200,
    weeksAmount = 8;

function paperPerWeek(packPaper, sheetsPerWeek, weeks){
    let totalsheets = (sheetsPerWeek * weeks) / packPaper;
    let totalPackPaper = totalsheets % 1;
    let result = totalsheets - totalPackPaper;
    if(totalPackPaper % 1 !== 0){
    return result + 1;
    } else {
        return result; 
    }
}

console.log(paperPerWeek(sheetsInReamPaper,consumptionPerWeek,weeksAmount));


