/*1*/

const min = (a, b) => {
  let arr = [a, b];
  return arr.sort((a, b) => a - b)[0];
};
console.log(min(4.5, 5))

/*2*/
let str = 'Abrakadabra'
let letter = ''

let lettersFound = 0

function countChar(str, lett){
  str = str.toLowerCase()
  for(let i = 0; i < str.length; i++){
    if(str[i] === lett.toLowerCase()){
      lettersFound++
      console.log(lettersFound);
    }
  }
}
countChar(str,letter)

/*3*/

function average() {
  let sum = 0;
  for (let i = 0; i < arguments[i]; i++ ) sum += arguments[i];
  return sum === 0 ? sum : sum / arguments.length;
}
alert( average( 1, 2, 3, 4, 5, 6, 7, 8, 9) )

/*4*/

const numbers = [6,7,2,1,3,4,9,10];

const result = numbers.filter(number => number > 5);

console.log(result);

/*5*/

const reg = /^[0,1,2]\d{13}/ 
const myInn = prompt("Введите ИНН")

function checkInn (Inn){
if(reg.test(Inn)){
  console.log(Inn, "Проверка пройдена");
}
else{
  console.log(Inn, "Проверка не пройдена");
}
}
checkInn(myInn)

/*6*/

function reverse(str){
  let i = str.length - 1;
  let result = '';

  while(i >= 0){
    result += str[i];
    i--;
  }

  return console.log(result);
};

reverse('abc')
