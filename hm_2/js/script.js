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

// 5

const val = addOneForAll(1, 2, 3, 4);