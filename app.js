const repetitions = prompt ("Ingrese la cantidad de veces que desea jugar"); // const(variable constante) prompt((input) para pedir datos al usuario) //

const repetitionsQty = Number.parseInt(repetitions); // cambio el contenido de la variable de texto a number

console.log('El usuario quiere que el juego se repita ${repetitionsQty} veces') //immprimimmos en la consola la cantidad de veces

for(let count = 1; count <= repetitionsQty; count = count +1){ //siclo for para realizar el ejercicio repetitionsQty veces con sus 3 condiciones
    // pedir una respuesta
    const userMove = prompt("Ingrese su jugada, debe ser: Piedra, Papel o Tijera");

    const randomMoveIndex = Math.floor(Math.random() * (4 - 1)) +1;  /// 1   2    o    3  (elija aleatoriamente) (tiene que ser hasta el cuatro de lo contrario toma del 0 al 2)
    let machineMove = "";
    
    if (randomMoveIndex === 1) {
        machineMove = "Piedra";
    } else if (randomMoveIndex === 2) {
        machineMove = "Papel";
    } else if (randomMoveIndex === 3) {
        machineMove = "Tijera";
    } else {
        console.error('La opcion randomMoveIndex no es valida: ${randomMoveIndex}');
    }

    let winner = ""; // Machine - User - Both

    if (machineMove === "Piedra"){
        if(userMove === "Papel") {
            winner = "User"
            alert("El ganador es: ${winner}");
        } else if (userMove ==="Tijera") {
            winner = "Machine"
            alert("${winner}");
        } else {
            winner = "Both"
            alert("El ganador es: ${winner}");
        }
    } else if (machineMove === "Papel"){
        if(userMove === "Tijera") {
            winner = "User";
            alert("El ganador es: ${winner}");
        } else if (userMove === "Piedra") {
            winner = "Machine";
            alert("El ganador es: ${winner}");
        } else {
            winner = "Both";
            alert("El ganador es: ${winner}");
        }
    } else if (machineMove === "Tijera"){
        if(userMove === "Piedra"){
            winner = "User";
            alert("El ganador es: ${winner}");
        } else if (userMove === "Papel"){
            winner = "Machine";
            alert("El ganador es: ${winner}");
        }else {
            winner = "Both";
            alert("El ganador es: ${winner}");
        }
    }   else {
        winner = "Unknown";
    }
    
    //mostrar el resultado
    console.log({ userMove, machineMove});
    console.log('El ganador es: ${winner}');
}