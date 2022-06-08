// 1
// function writeNumber(){
//     let num = (+prompt('Введите число больше 0'));
//     let resul = 0;
//     for(let i = 0; i <= num; i++){
//         resul += i * i;
//     }
//     return resul
// } 

// console.log(writeNumber());

// 2

// let arr = [3, 5, 12, 9, 23, 93, 17];
// let filteredArr = arr.filter(el => el > 2 && el < 20);
// let resul = 0;
// for(let i=0; i < filteredArr.length; i++){
//     resul = resul + filteredArr[i];
// } 
// console.log(resul);

// 3

let arr = [[1, 6, 3, '6'], [10, 15, 13, '10']];
let onlyNumber = arr[1].filter(item =>  item == 'Number' );
console.log(arr[0]);



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

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
