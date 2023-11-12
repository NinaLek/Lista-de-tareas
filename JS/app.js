const tarea= document.getElementById('tarea');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');
btnAgregar.addEventListener('click',()=>{
    lista.innerHTML +=` <input type="checkbox" class="tarea-op"> ${tarea.value} <br>`
    tarea.value='';
});

