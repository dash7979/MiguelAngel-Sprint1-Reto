//viendo apoyos en Youtube 
const drawX = (tamaño) => {
    for (let index = 0; index < tamaño; index++) {
        let linea = " ";

        for (let asterist = 0; asterist < tamaño; asterist++) {
            if (asterist === index || asterist === tamaño - 1 - asterist) {
                linea += "*";
            } else {
                linea += " ";
            }
        }
        console.log(linea);
    }
};

drawX(7);
