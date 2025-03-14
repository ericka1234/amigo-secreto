// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminare los espacios en blanco

    if (nombre === "" || !isNaN(nombre)) { 
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista

    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe ingresar al menos un nombre antes de sortear");
        return;
    }

    let nombreAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[nombreAleatorio];

    // Vaciar la lista de nombres
    document.getElementById("listaAmigos").innerHTML = "";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto sorteado es: " + amigoSecreto;

    amigos = [];
}
