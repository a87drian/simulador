//#region DECLARACION DE LAS CLASES

class Jugador {
    constructor(nombre,/* equipo,*/ capitan) {
        this.validarNombre(nombre);
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
        console.log(jugadores);
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

//ingresar equipo tiene que haber mas de un equipo
let equipo = ingresarEquipo();
let jugadores = [];
for (let index = 0; index < 3; index++) {
    jugadores.push(ingresarJugadores(equipo))
}

equipo.addJugadores(jugadores);

console.log(equipo.jugadores);

alert("En el equipo " + equipo.nombre + "Juegan" + equipo.jugadores.nombre.join(', '));


//#endregion

//elegir dia y horario
//mostrar canchas disponibles 
//agendar turno

function ingresarEquipo() {
    let entrada = prompt("Ingresar Nombre de los Equipos o q para continuar");
    let equipo;

    // while (entrada != "q") {
    if (entrada.length != 0) {
        equipo = new Equipo(entrada);
        // equipos.push(equipo);

        // }
    }
    return equipo;
}

function ingresarJugadores(equipo) {
    let entrada = prompt("Ingresar Jugador para equipo " + equipo.nombre ) 
        if (entrada.length != 0) {
            let capitan = prompt("Es Capitan: S o N");
            if (capitan == "S") {
                jugador = new Jugador(entrada, true );
        
            }
            else {
                jugador = new Jugador(entrada, false );

            }
        }
    }



//crear canchas
function crearCancha() {
    turnos = [];
    //la variable dia iria un dia pero como no se como se hace una variable datetime la deje asi
    turnos.push(new Turno(dia, 17, 18));
    turnos.push(new Turno(dia, 18, 19));

    const cancha1 = new Cancha(1, turnos);
}