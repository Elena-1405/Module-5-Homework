/* Дана переменная x, которая может принимать любое значение. 
Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: 
«x — число».
Опишите три случая: когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён».
Примечание: в этом задании использовать promt не нужно.*/

let x = "1";
let y = typeof x;

switch(y) {
  case "number":
    console.log("Number");
    break;
  case "string":
    console.log("String");
    break;
  case "boolean":
    console.log("Boolean");
    break;
  default:
    console.log("Not defined");
}