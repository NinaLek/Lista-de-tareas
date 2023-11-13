const lista = document.getElementById('lista');
const tarea= document.getElementById('tarea');
//----------------botones----------------------------------------
const btnAgregar = document.getElementById('btnAgregar');
const btnEliminar = document.getElementById('btnEliminar');

//---------------------------------------------------------------

//------funciones--------------------------------------------------

function eliminarSeleccion(){
    const checkbox = document.getElementsByClassName('tarea-op');
    for(const elem of checkbox){
        if(elem.checked){
            console.log('a ver');
            elem.nextSibling.remove();
            elem.remove();
        }
    }
}

function agregarTarea(){
    if(tarea.value != ''){
        lista.innerHTML +=`<li><input type="checkbox" class="tarea-op"> ${tarea.value}</li>`
        tarea.value='';
    }else{
        document.getElementById('advertencia').innerHTML = 'Ingrese la tarea que quiere agregar';
    }
}


//------Event Listeners--------------------------------------------

btnAgregar.addEventListener('click',()=> {
    agregarTarea();
});



btnEliminar.addEventListener('click',()=> {
    eliminarSeleccion();
});
