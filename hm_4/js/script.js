// 1

function bigFunc(someFunc, ctx, ...arg){

    return function(){
        someFunc.apply(ctx,arg)
    }
}

function func (a,b,c){
    console.log(a,b,c);
    console.log(`тебе ${2022 - this.year} лет `);
}
const contecst = {
    name: 'Dima',
    year: 1995,
}
const returnedFunction = bigFunc(func,contecst,1,2,3)

returnedFunction()

// 2 , виыделил целый день на решение и все равно не понял как это сделать через this

const obj = {
    a: 2,
    b: 4,
    c: 6,
    d: 8,
    e: 26,
};


function sumOfKey() {
    let result = 0;
    for (key in obj) {
        result += obj[key];
    }  
    return result  
}
console.log(sumOfKey())

// =========================================
const f  = Object.values(obj);

function sumOfKey(someFunc, ctx){

    return function(){
        someFunc.apply(ctx)
    }
}

function func (){
    let result = 0;
    for(let i = 0; i < f.length; i++)
    result += this[i];
    console.log(result)
}


const returnedFunction = sumOfKey(func,f)

console.log(returnedFunction())



// 3

const valObject0 = {
    values: [1, '2', 4, 8, '8',  3, 10, null, false],
};

let val = function() {
    return this.values    
}

function getNewArray(arr){
    if (val.call(arr) === undefined ){
        return 'Не найдено'
    } else {
    arr = val.call(arr).filter(item =>{
    if (typeof item == 'number' && item % 2 ==0 && item > 2 && item < 10) {
        return true
            }
        });
    return arr
    }
}
console.log(getNewArray(valObject0));
// 4


function getCity(object) {
    let result = []; 
    for (const [key, value] of Object.entries(object)) {
    result.push(`${key} - это ${value}`);
    }
    return result
    }

console.log(getCity(citiesAndCountries))


// 5
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда','Четверг','Пятница','Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday', 'Sunday'],
}

function getNameOfDay(lang, datNumber){
        let mass = namesOfDays[lang];
        console.log(mass)
        if (datNumber > 31) {return 'Неверное значение'}
        else if (datNumber % 7 == 0 ){
            return mass [6]
        }
        else{
            datNumber %= 7
            return mass[datNumber - 1]
}
}
console.log(getNameOfDay('en', 11))

// 6

const person = {
    name: 'Vlad'
};
const person1 = {
    age: 1
};

function setProto(currentObj, protoObj){
    currentObj.__proto__ = protoObj
    return currentObj
}
console.log(setProto(person1,person))

// 7  Не понимаю как вызвать в функции обьекта еще одну функцию, точнее как к ней обратиться 


const person = {
    name : '',
    setName : function(sayName){
        this.name = sayName
    },
    getName : function() {
        console.log(this.name)
    },
    

    age : '',
    setAge : function(sayAge){
        if(sayAge < 18){
            this.age = 'Validation Error'
        } else {
            this.age = sayAge
        }  
    },   
    getAge : function() {
        console.log(this.age)
    },
}

const person1 = {
    __proto__: person
}
person1.setName('Dimaaa')
person1.getName()
person1.setAge(7)
person1.getAge()
console.log(person)
console.log(person1)

