/*1*/

let arr = [20, 3, 4, 5, 50, 100, 19, 200, 5000, 599, 2];
let min = arr[0];

arr.forEach(function (elem, index) {
    if(index > 0 ){
        if(min > elem){
            min = elem;
        }
    }
});
console.log(min);

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

const numbers = [10,5,20]

function foo(args){
  const summa = args.reduce((a , b) => a + b, 0)
  const length = args.length
  const result = summa / length
  console.log(result);
}

foo(numbers)

/*4*/

const words = [6,7,2,1,3,4,9,10];

const result = words.filter(word => word > 5);

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

  while (i >= 0) {
    result = result + str[i];
    i = i - 1;
  }

  return console.log(result);;
};
reverse('asd')
