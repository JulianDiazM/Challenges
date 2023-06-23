/*
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.
*/

Array.prototype.last = function() { // Método propio de todos los arrays
    if(this.length === 0){ // Verificación en caso de que el array este vacio
        return -1;
    }
    else { // El array no está vacio
        return this[(this.length - 1)];
    }
}

let numbers = JSON.parse('[1, 2, 3, 4, 5]');
console.log(numbers.last()); // → 5

let fruits = JSON.parse('[]');
console.log(fruits.last()); // → -1