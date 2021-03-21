//#region DECLARACION DE LAS CLASES

class Jugador {
    constructor(nombre, /* equipo,*/ capitan) {
        //this.nombre = this.validarNombre(nombre); revisar porque no anda
        this.nombre = nombre;
        this.capitan = capitan;
    }
    validarNombre(nombre) {

        console.log(nombre);
        if (nombre.length > 3) {
            this.nombre = nombre.toUpperCase();
        }
    }
}

class Equipo {
    constructor(nombre) {
        this.validarNombre(nombre);
        //jugadores = [];
    }
    validarNombre(nombre) {
        let nombreTrim = nombre.trim();
        if (nombreTrim.length > 2) {
            this.nombre = nombreTrim;

        }
    }
    addJugadores(jugadores) {
        this.jugadores = jugadores;
    }

}

class Turno {

    constructor(dia, horaInicio, horaFin) {
        this.dia = dia;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }
}
class Cancha {
    constructor(id) {
        this.id = id;
    }

}
//#endregion

//#region MAIN

// let divEquipo = document.getElementById("equipo");
// let boton = document.getElementById("boton");
// boton.innerHTML = "Ingresar Equipo";
$('#boton').append("Ingresar Equipo");


let equipo;
boton.onclick = () => {
    equipo = ingresarEquipo();
    crearInputJugadores();


}


function crearInputJugadores() {
    //let jugadores = [];
    // let divGenerado = document.createElement("div");
    // divGenerado.innerHTML = "<h1>Ingresar Jugadores</h1>"
    $('#equipo').append('<div><h1>Ingresar Jugadores</h1></div>');


    for (let index = 0; index < 3; index++) {

        // jugadores.push(ingresarJugadores(equipo));
        // divGenerado.innerHTML += "<input type='text' id='jugador" + index + "'>";
          $('#equipo').append("<input type='text' id='jugador" + index +  "'>");


        }
        $('#equipo').append("<button id='botonJugador'>Ingrese Jugadores</button>");
        // divEquipo.appendChild(divGenerado);

        let botonJugador = document.getElementById("botonJugador");
        botonJugador.onclick = () => {
            let jugadores = [];
            jugadores = ingresarJugadores(equipo);
            console.log(jugadores);

            equipo.addJugadores(jugadores);

            // let padre = document.getElementById("ListaJugadores");
            // let titulo = document.getElementById("titulo");
            // let nombre = document.createTextNode("En el equipo " + equipo.nombre + " juegan:");
            $('#titulo').append("En el equipo " + equipo.nombre + " juegan:")
            // titulo.appendChild(nombre);


            // let lista = document.createElement("ul");

            for (i = 0; i < jugadores.length; i++) {

                // lista.innerHTML = lista.innerHTML + "<li>" + jugadores[i].nombre + "</li>";
                $('#ListaJugadores').append("<li>" + jugadores[i].nombre +"</li>");

            }
            // padre.appendChild(lista);


        }
    }

    //equipo.addJugadores(jugadores);


    // alert("En el equipo " + equipo.nombre + "Juegan" + equipo.jugadores.nombre.join(', '));

    // alert("En el equipo " + equipo.nombre + " Juegan " + jugadoresS.toString());
    // let capitan = jugadores.find(jugador => jugador.capitan === true);
    console.log(jugadores.filter(jugador => jugador.capitan === true));
    // alert("El Capitan es " + capitan.nombre);


    //#endregion

    //elegir dia y horario
    //mostrar canchas disponibles 
    //agendar turno

    function ingresarEquipo() {
        // let entrada = prompt("Ingresar Nombre de los Equipos o q para continuar");

        let entrada = document.getElementById("datos").value;
        let but = document.getElementById("boton");
        let equipo;


        // while (entrada != "q") {
        if (entrada.length != 0) {
            equipo = new Equipo(entrada);
            // equipos.push(equipo);

            // }
        }
        console.log(equipo);
        return equipo;
    }

    function ingresarJugadores(equipo) {
        let jugador = [];


        for (let index = 0; index < 3; index++) {
            let id = "jugador" + index;
            //console.log(document.getElementById(id).value);



            jugador.push(new Jugador(document.getElementById(id).value, false));



        }
        return jugador;
    }



    //crear canchas
    function crearCancha() {
        turnos = [];
        //la variable dia iria un dia pero como no se como se hace una variable datetime la deje asi
        turnos.push(new Turno(dia, 17, 18));
        turnos.push(new Turno(dia, 18, 19));

        const cancha1 = new Cancha(1, turnos);
    }