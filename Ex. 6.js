/* Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false 
в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.*/

let arr = [1, 2, 4, 5, 2];
let isEqual = true;
let reference = arr[0];

for (let item of arr) {
  if (item !== reference) {
    isEqual = false;
  }
}
console.log(isEqual)