const repetitions = prompt ("Ingrese la cantidad de veces que desea jugar"); // const(variable constante) prompt((input) para pedir datos al usuario) //

const repetitionsQty = Number.parseInt(repetitions) // cambio el contenido de la variable de texto a number

console.log('El usuario quiere que el juego se repita ${repetitionsQty} veces') //immprimimmos en la consola la cantidad de veces

for(let count = 1; count <= repetitionsQty; count = count +1){ //siclo for para realizar el ejercicio repetitionsQty veces con sus 3 condiciones
    // pedir una respuesta
    const userMove = prompt("Ingrese su jugada, debe ser: Piedra, Papel o Tijera");

    const randomMoveIndex = math.floor(math.random() * 3)   /// 1   2    o    3  (elija aleatoriamente)
    let randomMoveText = "";

    If (randomMoveIndex === 1){
        randomMoveText = "Piedra";
    } 
    else if (randomMoveIndex === 2){
        randomMoveText = "Papel";
    } 
    else if (randomMoveIndex === 3){
        randomMoveText = "Tijera";
    }
    //mostrar el resultado
}