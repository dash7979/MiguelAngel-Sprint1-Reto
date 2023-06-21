

//function countNameRepetitions(nombres){
//    let count = 0;
//    for (let i = 0; i < nombres.length; i++){
//        if (nombres[i] === nombres[i+1]){
//            count++;
//        }
//    }
//    return count;
//}

//console.log(countNameRepetitions(nombres));

//simple

function countNameRepetitions(nombres){
    let Contar = {};

    for (let i = 0; i < nombres.length; i++){
        let nombre = nombres[i];
        if (Contar[nombre]){
                    Contar[nombre]++;
                }else{
                    Contar[nombre] = 1;
                }
    }

    let resultado = {};
    for (let nombre in Contar){
        const llamado = Contar[nombre];
        resultado["Juan"] = "*".repeat(llamado);
        resultado["Maria"] = "*".repeat(llamado);
        resultado["Carlos"] = "*".repeat(llamado);
        console.log(nombre + ": " + resultado[nombre]);
    }
    return resultado;
}
const nombres = ["Juan", "Carlos", "Maria", "Maria", "Juan", "Juan", "Carlos", "Carlos", "Carlos"];
countNameRepetitions(nombres);
//console.log(countNameRepetitions(nombres));