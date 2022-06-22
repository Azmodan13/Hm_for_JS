// 1
let p = document.createElement('p');
p.innerText = 'first task';
p.className = 'img';
document.body.append(p);

let img = document.createElement('img');
img.src = 'fine.jpeg';

img.setAttribute('style','width:100px;position: absolute; z-index: 500; transition:0.5s;');

p.onclick = () => {
    p.append(img);
    img.onmouseover = () => {
        img.style.width ='200px';
        img.onclick = () => {
            img.setAttribute('style','display:none;');
        }
    }
};

// 2

const arr = [1, 2, 3, 0, 4, 5, 6];

function sumLastNumber(arr, index) {
    arr = arr.reverse();
    let result = 0;
    for(let i = 1; i<= index; i++){
        result += arr[i - 1];
        if (arr[i - 1 ] == 0){
            return result
        }
    }
    return result
}
console.log(sumLastNumber(arr,1));

// 3

const arr2 = [1, 1, 3, 0, 4, 5, 6];

function numberOfArr(arr) {
    let i = 0;
    for(let result = 0;result <= 10;){
        result += arr[i];
        i ++;
    }
    return i;
}
console.log(numberOfArr(arr2));

// 4

let input = document.createElement('input');
input.id = 'someText';
let btn = document.createElement('button');
btn.className = 'btn';
btn.innerText = 'fourth task';
document.body.append(input,btn);

btn.onclick = () => {
    let val = document.getElementById('someText').value;
    console.log(val);
};

// 5


const link = document.getElementsByTagName('a');


    for (var i = 0; i < link.length; i++) {
	link[i].addEventListener('mouseover',addText);
}

function addText() {
    this.innerHTML = this.innerHTML + ' (' + this.href + ')';
	this.removeEventListener('mouseover', addText);
}

// 6

const button = document.createElement('button');
button.innerText = 'six task';
button.className = 'button';
document.body.append(button);

button.onclick = () => {
    button.setAttribute('style','display:none;')
}

// 7
const sevenTask = document.createElement('div');
sevenTask.className = 'seven_task';
sevenTask.innerText = 'seven task';
sevenTask.setAttribute('style','width: 660px; height:200px; border: 5px solid #000; background-color:#999999;border-radius:20px; padding:20px; position: relative; display:flex;    flex-direction: column-reverse;text-align: center;')



const cercle = document.createElement('div');
cercle.className = 'cercle';
cercle.setAttribute('style','width:100px; height:100px; background-color:red; border-radius: 50%; position:absolute; transition:0.5s; top:0;');

const input2 = document.createElement('input');
input2.className = 'input';
input2.setAttribute('style','padding: 0px 10px;height: 40px;border-radius: 5px;border: none;color: #4B4B4B;')

const start = document.createElement('button');
start.className = 'start';
start.innerText = 'START';
start.setAttribute('style','height: 40px;background: #c70101;border-radius: 5px;color: #FFFFFF;border: none; margin:0 0 10px 0')

sevenTask.append(cercle, input2, start);

document.body.append(sevenTask);

input2.addEventListener("keyup", function(){
    this.value = this.value.replace(/[^\d]/g, "");
});

start.onclick = () => {
    let val = input2.value;
    if(val <= 600 && val >= 0){
    console.log(val);
    cercle.style.left = `${val}px`;
} else {
    input2.value = 'ERROR';
}
};

// 8 //* Если есть способ проще это сделать,  я бы хотел посмотреть)

let attrs = document.querySelector('.data').querySelectorAll('button');

function logDataAttr() {
for (var i = 0; i < attrs.length; i++) {
    attrs[i].addEventListener('click', myFunc);
    }
};

    function myFunc() {
        let obj = this.attributes;
        console.log(`У этого элемент ${obj.length -1} дата аттрибутов`);
        for (var i = 1; i < obj.length; i++) {
            console.log( 'Аттрибут ' + obj[i].name + ' - ' + obj[i].value);
        }
    };
