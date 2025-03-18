// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos= [];
let amigosorteado= 0;



function captura () {
    let amigocaputrado = document.getElementById('amigo').value

    if (amigocaputrado.trim() === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
        }

        console.log(amigocaputrado)
    amigos.push(amigocaputrado)
    console.log(amigos);
    document.getElementById('amigo').value = "";
    
    Updateli();
}

/*function reemplazo(lista_Amigos, lista) {
    let elementoHTML = document.getElementById(lista_Amigos);
    elementoHTML.innerHTML = lista;
    return;
    li();
}
*/ 

function Updateli() {
    let tamano = amigos.length;
    console.log('el tamaño es '+tamano)
    let list = document.getElementById('listaAmigos')

    list.innerHTML = '';


        for (i = 0; i <= tamano; i++) {
            let lielemn = amigos[i];
            let li = document.createElement('li');
            li.textContent = amigos[i];
            list.appendChild(li);
        }
        
        /*reemplazo('listaAmigos',list);
        console.log(list)*/
}


function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear");
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    amigosorteado = amigos[indiceAleatorio];
    console.log(amigosorteado);
    // Mostrar el resultado
    document.getElementsByName('amigoSorteado').textContent = "¡El amigo sorteado es: " + amigosorteado + "!";
    

    //////////////////////////
    let listaContainer = document.getElementById('listaAmigos');
    listaContainer.innerHTML = '';

    // Crear un nuevo elemento para mostrar el resultado
    let resultElement = document.createElement('div');
    resultElement.className  = 'result-list';
    resultElement.textContent = "¡El amigo sorteado es: " + amigosorteado + "!";
    
    // Agregar el resultado al contenedor
    listaContainer.appendChild(resultElement);
}