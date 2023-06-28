// function celular (telefonoCelular = [3,5,5,8,2,4,9,5,7,7]){

//     let numero = telefonoCelular.toString();
//     return numero;
// }

// console.log(celular("(355) " + "8249577"));



const celular = (numeros) => {
    if (numeros.length !== 10){
        return console.log("deben ser 10 numeros")
    }else{
        const unirNumeros = numeros.join("")
        const primeraParte = unirNumeros.slice(0, 3)
        const segundaParte = unirNumeros.slice(3, 6)
        const terceraParte = unirNumeros.slice(6, 10)
        return `(${primeraParte}) ${segundaParte} - ${terceraParte}`;
    }
    

}
console.log(celular([3,5,5,8,2,4,9,5,7,7,8]));