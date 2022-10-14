/*Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/


let string = "hello"

string = string.split("").reverse().join("");

console.log(string)