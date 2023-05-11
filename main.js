document.addEventListener("DOMContentLoaded", function() {
    var peliculas = document.getElementsByClassName("pelicula");
    for (var i = 0; i < peliculas.length; i++) {
        var caratula = peliculas[i].getElementsByTagName("img")[0];
        var enlace = peliculas[i].getElementsByTagName("a")[0];
        var enlaceDirecto = enlace.getAttribute("href");
        caratula.addEventListener("click", crearRedireccion(enlaceDirecto));
    }
});

function crearRedireccion(enlace) {
    return function() {
        window.location.href = enlace;
    }
}