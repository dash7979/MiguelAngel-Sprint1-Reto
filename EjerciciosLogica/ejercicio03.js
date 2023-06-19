const nombres = [Juan, Carlos, Maria, Maria, Juan, Juan, Carlos, Carlos, Carlos];

function countNameRepetitions(nombres){
    let count = 0;
    for (let i = 0; i < nombres.length; i++){
        if (nombres[i] === nombres[i+1]){
            count++;
        }
    }
    return count;
}

console.log(countNameRepetitions(nombres));