// 1

const vegetable =  ['Капуста', 'Репа', 'Редиска', 'Морковка'];

let log = '';
for(let i = 0 ; i < vegetable.length; i++){
    if(i + 1 == vegetable.length){      
        log +=  vegetable[i];
        break;
    } else {
    log = log + vegetable[i] + '|';
    }
} 
console.log(log);

// Второй вариант
const vegetable =  ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetable.join('|'));


// 2 
let name = 'Вася;Петя;Вова;Олег';
let mass = name.split(';');
console.log(mass);

// 3

function hello2(name = "гость") {
        return "Привет" + " " + name; 
}
console.log(hello2());

// 4

const fruits = ['яблоко', 'ананас', 'груша'];
let fruitsUpper = [];
function upper() { 
    for(let i = 0; i < fruits.length; i++){
        fruitsUpper[i] = fruits[i].toUpperCase();        
    }
    return fruitsUpper;
}
console.log(upper());

// Второй вариант 

const arr = ['яблоко', 'ананас', 'груша'];
    function mapHelper(element, index, arr) {
        return element.toUpperCase();
    }
    console.log(arr.map(mapHelper));

// 5

function addOneForAll (...num){  
    let mas = [];
    for(let i=0; i< num.length; i++){
        mas[i] = num[i] + 1;
    }
    return mas;
}
console.log(addOneForAll(1, 2, 3));

// Второй вариант 
function addOneForAll (...num){  
    const newArray = num.map(function(item, i, arr){
        return item + 1
    });
    return  newArray
}
console.log(addOneForAll(1, 2, 3));


//   6

function getSum (...num){  
    let mas = 0;
    for(let i=0; i < num.length; i++){
        mas += num[i];
    }
    return mas;
}
console.log(getSum(1, 2, 3, 4));

//   7

const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];
let filteredArr = arr.filter(el => typeof el == 'number');
console.log(filteredArr);

// 8

function arrayTesting(arr){  
    let resul = arr.some(el => el == true);
    if (resul == true){
        return 'Нашли true значение'
    }else{      
        return 'Ничего нет'; 
    } 
} 

console.log(arrayTesting([0, false, null,0]));

//Второй вариант.
function arrayTesting(arr){  
    if(arr.filter(el => el == true).length !== 0){
        return 'Нашли true значение';
    }
    return 'Ничего нет';    
}
console.log(arrayTesting([0, false, null,0,]));

