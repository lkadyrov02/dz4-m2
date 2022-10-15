/*1*/
function positive(num){
  return num;
}
console.log(positive(10, 5));
console.log(positive(10));


/*2*/
var symb = "b", str = "aaBBBbbb";
function count(str, symb) {
  
  for (var count = -1, index = 0; index != -1; count++, index = str.toLowerCase().indexOf(symb.toLowerCase(), index +  1));
  return count
}

/*3*/

console.log((count(str, symb)))
function num(num1, num2) {
  const result = (num1 + num2)/2
  console.log(result);
}

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
