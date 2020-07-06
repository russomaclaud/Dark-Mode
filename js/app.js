//Metodo para usar el boton y cambiar de color el fondo de la pagina
const checkbox = document.querySelector('#checkbox');

if(window.matchMedia('(prefers-color-scheme: dark)').matches){

    checkbox.setAttribute('checked', true);
}

//Metodo para cambiar de color el fondo de la pagina
checkbox.addEventListener('change', function(event){

    if(this.checked){

        document.body.classList.remove('is-light-mode');
        document.body.classList.add('is-dark-mode');
        
    } else{

        document.body.classList.remove('is-dark-mode');
        document.body.classList.add('is-light-mode');
    }
    

})