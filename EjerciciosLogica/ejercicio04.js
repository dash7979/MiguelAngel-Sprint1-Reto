//Ejercicio #4
// FizzBuzz
// Tu tarea es escribir un programa que recorra los números del 1 al n. Para cada número:
// Si el número es divisible por 3, debes imprimir "Fizz".
// Si el número es divisible por 5, debes imprimir "Buzz".
// Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
// Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual.
// Para lograrlo debes implementar una función llamada fizzBuzz(n), que tome como
// parámetro un número entero n y ejecute el juego FizzBuzz.
const fizzBuzz = (n) => {
    for (let numero = 1; numero <= n; numero++) {
        if (numero % 3 == 0 && numero % 5 == 0){
        console.log(numero + " FizzBuzz") 
        } else if (numero % 5 == 0){
            console.log(numero + " Buzz")
        } else if(numero % 3 == 0){
            console.log(numero + " Fizz")
        } else {
            console.log(numero)
        }    
    }
}          


console.log(fizzBuzz(120))