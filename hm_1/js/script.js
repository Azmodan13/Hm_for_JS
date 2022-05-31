const name = 'Andrew';

const type = typeof name == 'string' ? 'Привет,' + name : "Ошибка, не тот тип данных";

console.log(type);

console.log(typeof 42);

console.log(typeof 'blubber');

console.log(typeof true);

console.log(typeof undeclaredVariable);

console.log(typeof null);

console.log(typeof Symbol('foo'));
