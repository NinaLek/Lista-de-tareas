const tarea= document.getElementById('tarea');
const btnAgregar = document.getElementById('btnAgregar');
const lista = document.getElementById('lista');
btnAgregar.addEventListener('click',()=>{
    lista.innerHTML=tarea.value
    tarea.value='';
});
