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

function addOneForAll (...num){  
    let mas = [];
    for(let i=0; i< num.length; i++){
        mas[i] = num[i] + 1;
    }
    return mas;
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

//Второй вариант, не понимаю почему не работает, все пункты получаються false, но ретерн все равно выполняеться внутри цикла фор

function arrayTesting(arr){  
    if(arr.filter(el => el == true)){
          return 'Нашли true значение';
    }
  return 'Ничего нет';    
  }
console.log(arrayTesting([0, false, null,0,]));