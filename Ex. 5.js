/* Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива. */

let arr = ["2", [], true, 12, "hat"];
let countElementsArr = arr.length;

console.log(countElementsArr);
arr.forEach(function(item, i, arr) {
  console.log( i + ": " + item + " (arr:" + arr + ")" );
})