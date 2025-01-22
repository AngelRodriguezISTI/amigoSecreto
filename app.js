
//Capturar el dato ingresado en input

let amigos = []
function agregarAmigo() {
    //Obtiene el nombre del input
    let obtenerNombre = document.querySelector('#amigo').value
    //revisar si hay valores introducidos
    if (obtenerNombre == "") {
        //alerta de que no hay ningun vaor
        alert('No hay valores introducidos')
    } else {
        //agregar al array
        amigos.push(obtenerNombre)
    }
    //Limpia el campo para agregar mas nombres
    agregarListaFunc();
    limpiarCampo();
}




//Limpiar input
function limpiarCampo() {
    let valorALimpiar = document.querySelector('#amigo')
    valorALimpiar.value = ""
}
//Agrega los nombres introducidos a la lista
function agregarListaFunc() {
    //Limpia la lista
    let limpiarLista = document.querySelector('#listaAmigos')
    limpiarLista.innerHTML = ""
    amigos.forEach(value => {
        //Crea el elemento li y lo agrega a cada elemento del arreglo
        var list = document.createElement('li');
        list.textContent = value
        limpiarLista.appendChild(list);
    });
    
}
//Sortea los nombres
function sortearAmigo() {
    if (amigos.length != 0) {
        let sorteo = Math.floor(Math.random()* amigos.length)    
        let colocarValor = document.querySelector('#resultado')
        colocarValor.textContent = `el amigo secreto es : ${amigos[sorteo]}`

    } else {
        alert('No hay amigos')
    }
    return amigos[sorteo]

}

