/* Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения 
в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/


let map = new Map();
map.set ( 1, "I'm learning JS.");
map.set ( 2, "At least I'm trying.");
map.set (3, "But I'm trying hard.")

for (let entry of map) {
console.log(`Ключ ${entry[0]} , значение ${entry[1]}`)
}