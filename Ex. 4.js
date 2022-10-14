/* Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.*/

function randomInteger(min, max) {
  let a = min + Math.random() * (max + 1- min);
  return Math.floor(a);
}

console.log( randomInteger(1, 100) );