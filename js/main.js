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
    jugadores.push(ingresarJugadores(equipo));
}

 let jugadoresS = [];
 for (let index = 0; index < jugadores.length; index++) {
    jugadoresS.push( jugadores[index].nombre);
     
 }

equipo.addJugadores(jugadores);


// alert("En el equipo " + equipo.nombre + "Juegan" + equipo.jugadores.nombre.join(', '));
let padre = document.getElementById("ListaJugadores");
let titulo = document.getElementById("titulo");
let nombre = document.createTextNode("En el equipo " + equipo.nombre + " juegan:");
titulo.appendChild(nombre);


let lista = document.createElement("ul");
 
for(const jugador of jugadores){
    lista.innerHTML = lista.innerHTML + "<li>"+ jugador.nombre + "</li>";

}
padre.appendChild(lista);
// alert("En el equipo " + equipo.nombre + " Juegan " + jugadoresS.toString());
// let capitan = jugadores.find(jugador => jugador.capitan === true);
console.log(jugadores.filter(jugador => jugador.capitan === true));
// alert("El Capitan es " + capitan.nombre);


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
            let capitan = prompt("Es Capitan: s o n");
            if (capitan == "s") {
                jugador = new Jugador(entrada, true );
        
            }
            else {
                jugador = new Jugador(entrada, false );

            }
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