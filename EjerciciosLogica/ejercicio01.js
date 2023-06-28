// Un número palíndromo es aquel que se lee de la misma manera de izquierda a
// derecha y de derecha a izquierda.
// En otras palabras, es un número que se mantiene igual cuando sus dígitos son
// invertidos.
// Ejemplos: 121, 12321 y 333.
// En este desafío, se te pide que crees una función llamada "next_pal()" que
// reciba como parámetro un número entero positivo, tu objetivo es que la
// función retorné el siguiente número palíndromo a partir del recibido por
// parámetro.



// function next_Pal(a,b) {
//     return a * b
// }

// let multiplicar = next_Pal(11, 2);
// console.log(multiplicar);

// function next_Pal2(c,d) {
//     return c + d
// }

// const sumar = next_Pal2(188, 3)
// console.log(sumar);

// //cambio de rama



//crear una funcion llamada next_pal() que reciba como parametro un numero entero positivo, el objetivo es que la funcion retorne el siguiente numero palindromo a partir del recibido  por parametro.

const next_palindromo =(numero) =>{
    //toString pasa un tipo number a un tipo string
    const numString = numero.toString();

    //el split divide cada digito (el cual ya se encuentra convertido en un sting) jemplo 6 8 9
    //el reverse da vuelta al numero como su nombre lo indica lo revierte
    //el join vuelve y junta los digitos
    const resultado = numString.split("").reverse().join("");

    //finalmente si el numero se lee igual de reversa entonces imprime el numero
    if (numString === resultado) {
        return numero;
    } else {
        let siguiente = numero + 1
        return next_palindromo(siguiente)
    //de lo contrario que retorne un ciclo que siga aumentando hasta que se encuentre de nuevo un palindromo y lo imprima
        // for(let i = 0; i < 9999999; i++); 
    }
}

console.log(next_palindromo(188))