// ===============================
// CAMBIAR DE PANTALLA
// ===============================

function siguientePantalla(numero) {
    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    const pantallaDestino = document.getElementById("pantalla" + numero);

    if (pantallaDestino) {
        pantallaDestino.classList.add("activa");
    }

    // Si llegamos a la pantalla 3,
    // preparamos la dedicatoria según la flor
    if (numero === 3) {
        prepararDedicatoria();
    }
}


// ===============================
// VARIABLES
// ===============================

let florSeleccionada = "";
let nombreFlorSeleccionada = "";


// ===============================
// SELECCIONAR FLOR
// ===============================

function seleccionarFlor(flor, nombre) {

    florSeleccionada = flor;
    nombreFlorSeleccionada = nombre;

    // Ocultar las flores
    document.getElementById("seleccionFlores").style.display = "none";

    // Mostrar la flor seleccionada
    document.getElementById("florGrande").innerText = flor;

    document.getElementById("instruccion").innerText =
        "Toca la flor para descubrir tu mensaje 💕";

    document.getElementById("florElegida").style.display = "block";

    // Ocultar mensaje anterior
    document.getElementById("mensajeBonito").style.display = "none";

    // Mostrar nuevamente la instrucción
    document.getElementById("instruccion").style.display = "block";
}


// ===============================
// ABRIR MENSAJE DE LA FLOR
// ===============================

function abrirMensaje() {

    let mensaje = "";
    let versiculo = "";
    let referencia = "";

    // ROSA
    if (nombreFlorSeleccionada === "Rosa") {

        mensaje =
            "Como una rosa, hay personas que hacen más bonito el camino simplemente con estar. ❤️";

        versiculo =
            "El amor es paciente, es bondadoso.";

        referencia =
            "1 Corintios 13:4";
    }

    // TULIPÁN
    else if (nombreFlorSeleccionada === "Tulipán") {

        mensaje =
            "Que esta pequeña flor te recuerde que siempre hay algo bonito esperando florecer. 🌷";

        versiculo =
            "El amor todo lo cree, todo lo espera, todo lo soporta.";

        referencia =
            "1 Corintios 13:7";
    }

    // GIRASOL
    else if (nombreFlorSeleccionada === "Girasol") {

        mensaje =
            "Así como el girasol busca la luz, que tu corazón siempre encuentre motivos para sonreír. 🌻";

        versiculo =
            "Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.";

        referencia =
            "Colosenses 3:14";
    }

    // FLOR DE CEREZO
    else if (nombreFlorSeleccionada === "Flor de cerezo") {

        mensaje =
            "Hay momentos que duran poco, pero dejan recuerdos que permanecen para siempre. 🌸";

        versiculo =
            "Y ante todo, tened entre vosotros ferviente amor.";

        referencia =
            "1 Pedro 4:8";
    }

    // HIBISCO
    else if (nombreFlorSeleccionada === "Hibisco") {

        mensaje =
            "Que nunca te falten cariño, alegría y personas que sepan valorar tu corazón. 🌺";

        versiculo =
            "Que os améis unos a otros.";

        referencia =
            "Juan 15:12";
    }

    // RAMO
    else if (nombreFlorSeleccionada === "Ramo") {

        mensaje =
            "Un pequeño ramo para recordarte que los detalles más sencillos pueden guardar sentimientos enormes. 💐";

        versiculo =
            "Con toda humildad y mansedumbre, soportándoos con paciencia los unos a los otros en amor.";

        referencia =
            "Efesios 4:2";
    }

    // Mostrar mensaje
    document.getElementById("mensajeTexto").innerText = mensaje;

    document.getElementById("textoVersiculo").innerText =
        "“" + versiculo + "”";

    document.getElementById("nombreVersiculo").innerText =
        referencia;

    // Ocultar instrucción
    document.getElementById("instruccion").style.display = "none";

    // Mostrar mensaje
    document.getElementById("mensajeBonito").style.display = "block";
}


// ===============================
// PREPARAR DEDICATORIA FINAL
// ===============================

function prepararDedicatoria() {

    let mensaje = "";
    let versiculo = "";
    let referencia = "";

    // ROSA
    if (nombreFlorSeleccionada === "Rosa") {

        mensaje =
            "Laura, que nunca te falten razones para sonreír y personas que sepan valorar tu corazón. Gracias por ser una persona tan especial. 🌹";

        versiculo =
            "Las muchas aguas no podrán apagar el amor.";

        referencia =
            "Cantares 8:7";
    }

    // TULIPÁN
    else if (nombreFlorSeleccionada === "Tulipán") {

        mensaje =
            "Que cada día encuentres algo nuevo por lo que agradecer y motivos para seguir adelante. 🌷";

        versiculo =
            "En todo tiempo ama el amigo.";

        referencia =
            "Proverbios 17:17";
    }

    // GIRASOL
    else if (nombreFlorSeleccionada === "Girasol") {

        mensaje =
            "Laura, escogiste el girasol, una flor que busca la luz. Que esta pequeña sorpresa te recuerde que incluso en los días difíciles siempre puedes encontrar una razón para seguir brillando. 🌻";

        versiculo =
            "Pon tu alegría en el Señor, y él cumplirá los deseos de tu corazón.";

        referencia =
            "Salmo 37:4";
    }

    // FLOR DE CEREZO
    else if (nombreFlorSeleccionada === "Flor de cerezo") {

        mensaje =
            "Hay personas que llegan de una manera sencilla y terminan ocupando un lugar muy bonito en nuestros recuerdos. Espero que esta pequeña página sea uno de ellos. 🌸";

        versiculo =
            "Amaos los unos a los otros con amor fraternal.";

        referencia =
            "Romanos 12:10";
    }

    // HIBISCO
    else if (nombreFlorSeleccionada === "Hibisco") {

        mensaje =
            "Nunca olvides lo valiosa que eres y todas las cosas bonitas que todavía están por llegar. Que Dios cuide siempre tu corazón. 🌺";

        versiculo =
            "Nosotros amamos porque él nos amó primero.";

        referencia =
            "1 Juan 4:19";
    }

    // RAMO
    else if (nombreFlorSeleccionada === "Ramo") {

        mensaje =
            "Un ramo para cerrar esta pequeña historia, pero también para dejarte un recuerdo: que nunca te falten cariño, paz, alegría y personas que quieran verte feliz. 💐";

        versiculo =
            "Haced todas vuestras cosas con amor.";

        referencia =
            "1 Corintios 16:14";
    }

    // Colocar los textos
    document.getElementById("dedicatoriaFinal").innerText =
        "Para ti, Laura ❤️";

    document.getElementById("textoFinal").innerText =
        mensaje;

    document.getElementById("versiculoFinal").innerText =
        "“" + versiculo + "”";

    document.getElementById("referenciaFinal").innerText =
        referencia;
}


// ===============================
// FINALIZAR
// ===============================

function finalizar() {

    const flores = [
        "🌸",
        "🌷",
        "🌹",
        "🌺",
        "🌻",
        "💐",
        "❤️"
    ];

    // Crear muchas flores
    for (let i = 0; i < 70; i++) {
        crearFlor(flores);
    }

    // Mostrar despedida
    document.getElementById("despedida").style.display = "block";
}


// ===============================
// CREAR FLORES QUE CAEN
// ===============================

function crearFlor(flores) {

    const flor = document.createElement("div");

    flor.classList.add("flor-caida");

    flor.innerText =
        flores[Math.floor(Math.random() * flores.length)];

    flor.style.left =
        Math.random() * 100 + "vw";

    flor.style.fontSize =
        20 + Math.random() * 30 + "px";

    flor.style.animationDuration =
        3 + Math.random() * 5 + "s";

    document.getElementById("lluviaFlores").appendChild(flor);

    // Eliminar después de la animación
    setTimeout(() => {
        flor.remove();
    }, 9000);
}


// ===============================
// VOLVER AL INICIO
// ===============================

function volverAlInicio() {

    // Ocultar despedida
    document.getElementById("despedida").style.display = "none";

    // Eliminar flores
    document.querySelectorAll(".flor-caida").forEach(flor => {
        flor.remove();
    });

    // Quitar pantalla activa
    document.querySelectorAll(".pantalla").forEach(pantalla => {
        pantalla.classList.remove("activa");
    });

    // Volver a pantalla 1
    document.getElementById("pantalla1").classList.add("activa");

    // Reiniciar pantalla de flores
    document.getElementById("seleccionFlores").style.display = "grid";

    document.getElementById("florElegida").style.display = "none";

    document.getElementById("mensajeBonito").style.display = "none";

    document.getElementById("instruccion").style.display = "block";

    // Borrar selección
    florSeleccionada = "";
    nombreFlorSeleccionada = "";
}