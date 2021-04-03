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
        this.jugadores = [];
    }
    validarNombre(nombre) {
        let nombreTrim = nombre.trim();
        if (nombreTrim.length > 2) {
            this.nombre = nombreTrim;

        }
    }
    addJugadores(player) {

        this.jugadores.push(player);
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
$('#equipo').append(`<div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Equipo:</span>
                        </div>
                        <input type="text" id="datos" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                    </div>
                    <button type="button" id="boton" class="btn btn-dark">Ingresar Equipo</button>
                    `);

let equipo;
const equipos = [];
console.log(document.URL);

$('#boton').on('click', function () {
    equipo = ingresarEquipo();
    equipos.push(equipo);
    mostarEquipos(equipos);
    sessionStorage.setItem('eqIngresados', JSON.stringify(equipos));
    $('#datos').val('');
    //$('#equipo').hide();
});

if (location.href.includes("jugadores.html")) {
    let eqs = JSON.parse(sessionStorage.getItem('eqIngresados'));

    for (const eq of eqs) {
        console.log(eq.nombre);
        equipos.push(new Equipo(eq.nombre, eq.jugadores));
    }

    mostarEquiposJ(equipos);


    //crearInputJugadores(equipos);


}



function crearInputJugadores(equipos) {

    InputJugadores();

    $('#botonJugador').on('click', () => {
        let jugadores = [];

        ingresarJugadores(equipo, $('#inputJugador').val());

        $('#inputJugador').val("");


        for (i = 0; i < jugadores.length; i++) {

            $('#ListaJugadores').append("<li>" + jugadores[i].nombre + "</li>");

        }

    });
    $('#terminar').on('click', () => {
        let uls = "";
        console.log(equipo.jugadores);

        for (let i = 0; i < equipo.jugadores.length; i++) {

            uls += `<ul>${equipo.jugadores[i].nombre}</ul>`;

        }


    });
}

function mostarEquipos(equipos) {
    console.log("mostrar equipos");
    //for (const equipo of equipos) {
    $('#mostrar_equipo').append(`<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                                        <div class="card-header">${equipo.nombre}</div>
                                             <div class="card-body">
                                                 <p class="card-text">                                         
                                             </div>
                                        </div>`);

    //}   
    /*        <li class="list-group-item list-group-item-warning">
                                                    ${uls}
                                                 </li></p> */
}

function mostarEquiposJ(equipos) {
    
    for (const equipo of equipos) {
        $('#agregar_jugadores').append(`<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                                        <div class="card-header"><h1>${equipo.nombre.toUpperCase()}</h1></div>
                                             <div class="card-body">
                                                <button type="button" id="botonJugador-${equipo.nombre}" class="btn btn-dark">Agregar Jugador</button>
                                                <p class="card-text"></p>
                                             </div>
                                        </div>`);
    
    $(`botonJugador-${equipo.nombre}`).on('click', function() {
        equipo.jugadores.push(new Jugador('adrian', true));
        console.log(equipo.jugadores);
    });
    }
}



/*        <li class="list-group-item list-group-item-warning">
                                                ${uls}
                                             </li></p> */



function InputJugadores() {
    $('#jugadores').append(`<div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Jugador:</span>
                                </div>
                             <input type="text" id="inputJugador" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                             </div>
                            <button type="button" id="botonJugador" class="btn btn-dark">Ingresar Jugador</button>
                            <button type="button" id="terminar" class="btn btn-dark">Terminar</button>
                            `);


}


//console.log(jugadores.filter(jugador => jugador.capitan === true));
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

    console.log(entrada.length != 0);
    // while (entrada != "q") {

    if (entrada.length != 0) {
        equipo = new Equipo(entrada);
        // equipos.push(equipo);

        // }
    }

    return equipo;
}

function ingresarJugadores(equipo, jugadorNombre) {
    //    const jugador = [];

    equipo.addJugadores(new Jugador(jugadorNombre, false));
    console.log(new Jugador(jugadorNombre, false));
    //return jugador;
}



//crear canchas
function crearCancha() {
    turnos = [];
    //la variable dia iria un dia pero como no se como se hace una variable datetime la deje asi
    turnos.push(new Turno(dia, 17, 18));
    turnos.push(new Turno(dia, 18, 19));

    const cancha1 = new Cancha(1, turnos);
}