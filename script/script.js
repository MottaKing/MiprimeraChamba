document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.getElementById('galeria');
    const imagenes = document.querySelectorAll('#galeria img');
    const btnAnterior = document.getElementById('anterior');
    const btnSiguiente = document.getElementById('siguiente');

    let indiceActual = 0;

    function mostrarImagen() {
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = 'none';
        }
        imagenes[indiceActual].style.display = 'block';
    }

    function imagenSiguiente() {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen();
    }

    function imagenAnterior() {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        mostrarImagen();
    }

    btnSiguiente.addEventListener('click', imagenSiguiente);
    btnAnterior.addEventListener('click', imagenAnterior);

    // Mostrar la primera imagen al cargar la página
    mostrarImagen();
});
