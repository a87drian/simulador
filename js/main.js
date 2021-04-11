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
    $('#carta').hide();
    $('#carta').fadeIn(1000);
    console.log(equipos);
    sessionStorage.setItem('eqIngresados', JSON.stringify(equipos));
    $('#datos').val('');
    //$('#equipo').hide();
});

if (location.href.includes("jugadores.html")) {

    let eqs = JSON.parse(sessionStorage.getItem('eqIngresados'));
    console.log(eqs);
    if (sessionStorage.getItem("eqIngresados") != null) {

        for (const eq of eqs) {
            console.log(eq.nombre);
            equipos.push(new Equipo(eq.nombre, eq.jugadores));
        }
    }


    mostarEquiposJ(equipos);
    //crearInputJugadores(equipos);
}

if (location.href.includes("campeonato.html")) {

    let eqs = JSON.parse(sessionStorage.getItem('eqIngresados'));

    for (const eq of eqs) {
        console.log(eq.nombre);
        equipos.push(new Equipo(eq.nombre, eq.jugadores));
    }
    $('#armar_campeonato').click(function (e) {
        console.log(e);
        $('#armar_campeonato').attr("disabled", true);

        armarCampeonato(equipos, equipos);
        $('#mostrar_campeonato').fadeOut("slow", function () {
            //Cuando termina de ocultarse el elemento lo mostramos nuevamente
            $("#mostrar_campeonato").fadeIn(1000);
        });

    });

}
const URLGET = "http://hp-api.herokuapp.com/api/characters/students";
$(`#armar_equipo`).click(() => {
    $.get(URLGET, function (respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            let equipos = [];
            let fequipos = [];
            let nequipos = [];


            for (const dato of misDatos) {

                equipos.push(new Equipo(dato.house, []));
                nequipos.push(dato.house);

            }
            nequipos = nequipos.sort();
            console.log(nequipos);

            for (let i = 0; i < equipos.length; i++) {
                a = i - 1;
                if (a < 0) {
                    a = 0;
                    fequipos.push(new Equipo(nequipos[i], []));

                }

                // if( equipos[a].nombre != equipos[i].nombre) {
                if (nequipos[a] != nequipos[i]) {
                    let jugadores = [];
                    fequipos.push(new Equipo(nequipos[i], []));
                }
            }
            console.log(equipos);
            console.log(fequipos);
            for (const dato of misDatos) {
                for (const equipo of fequipos) {
                    if (equipo.nombre === dato.house) {
                        //mostarEquiposArmados(equipo, dato.name)
                        equipo.jugadores.push(new Jugador(dato.name, false));
                    }

                }
            }
            console.log(fequipos);


            mostarEquiposArmados(fequipos);
        }


    });
});
//Declaramos la url que vamos a usar para el GET
const URLPOST = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost = {
    nombre: "Ana",
    profesion: "Programadora"
}
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">POST</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => {
    $.post(URLPOST, infoPost, (respuesta, estado) => {
        if (estado === "success") {
            $("body").prepend(`<div>
Guardado:${respuesta.nombre}
</div>`);
        }
    });
});

//#endregion

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

    $('#mostrar_equipo').append(`<div class="card text-white bg-warning mb-3" id="carta" style="max-width: 18rem;">
                                        <div class="card-header">${equipo.nombre.toUpperCase()}</div>
                                             <div class="card-body">
                                                 <p class="card-text">                                         
                                             </div>
                                        </div>`);
}

function mostarEquiposJ(equipos) {

    for (const equipo of equipos) {

        $('#agregar_jugadores').append(`<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                                        <div class="card-header"><h1>${equipo.nombre.toUpperCase()}</h1></div>
                                             <div class="card-body">
                                             <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="inputGroup-sizing-default">Jugador:</span>
                                                 </div>
                                                <input type="text" id="inputJugador-${equipo.nombre}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                                </div>
                                                <button type="button" id="botonJugador-${equipo.nombre}" class="btn btn-dark">Agregar Jugador</button>
                                                <p class="card-text"></p>
                                                <ul class="list-group" id="lista-jugadores-${equipo.nombre}">
                                                </ul>
                                             </div>
                                        </div>`);
        $(`#botonJugador-${equipo.nombre}`).on('click', function () {
            if ($(`#inputJugador-${equipo.nombre}`).val().length != 0) {
                $(`#lista-jugadores-${equipo.nombre}`).append(agregarJugadorEquipo(equipo, $(`#inputJugador-${equipo.nombre}`).val()));
                $("li").fadeIn();
                $(`#inputJugador-${equipo.nombre}`).val("");

               

                $.post(URLPOST, infoPost,(respuesta, estado) => {
                    if(estado === "success") {
                        console.log("guardado");
                        //$(`#li-${jugador}`).append(`<span class="badge badge-success">Guardado</span>`)


                    }
                } );
            }
        });

    }

}

function mostarEquiposArmados(equipos) {

    for (const equipo of equipos) {
        $('#agregar_jugadores').append(`<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
                                        <div class="card-header"><h1>${equipo.nombre.toUpperCase()}</h1></div>
                                             <div class="card-body">
                                             <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="inputGroup-sizing-default">Jugador:</span>
                                                 </div>
                                                <input type="text" id="inputJugador-${equipo.nombre}" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                                                </div>
                                                <button type="button" id="botonJugador-${equipo.nombre}" class="btn btn-dark">Agregar Jugador</button>
                                                <p class="card-text"></p>
                                                <ul class="list-group" id="lista-jugadores-${equipo.nombre}">
                                                </ul>
                                             </div>
                                        </div>`);
        for (const jugador of equipo.jugadores) {
            $(`#lista-jugadores-${equipo.nombre}`).append(`<li class="list-group-item list-group-item-warning">${jugador.nombre}</li>`);

        }
    }

    // $(`#botonJugador-${equipo.nombre}`).on('click', function () {

    $("li").hide();
    $("li").fadeIn();
    $(`#inputJugador-${equipo.nombre}`).val("");
    // }



}

function agregarJugadorEquipo(equipo, jugador) {

    equipo.jugadores.push(new Jugador(jugador, false));
    //agregar jugador
    return `<li class="list-group-item list-group-item-warning" id="li-${jugador}">${jugador}</li>`


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



function ingresarEquipo() {
    // let entrada = prompt("Ingresar Nombre de los Equipos o q para continuar");

    let entrada = document.getElementById("datos").value;
    let but = document.getElementById("boton");
    let equipo;

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

function armarCampeonato(listaEquipos1, listaEquipos2) {

    let cant_encuentros_por_fecha = listaEquipos1.length / 2;
    cant_encuentros_por_fecha = Math.floor(cant_encuentros_por_fecha);
    if (cant_encuentros_por_fecha % 2 == 0) {
        cant_fechas = (listaEquipos1.length * (listaEquipos1.length - 1)) / 2;
        let o = 0;
        console.log(cant_encuentros_por_fecha);



        for (let i = 0; i < cant_fechas; i++) {
            let fecha = i + 1;
            console.log("fecha " + fecha);


            let list = "";
            while (o <= cant_encuentros_por_fecha) {
                //console.log(listaEquipos1[o].nombre + " vs " + listaEquipos1[++o].nombre);
                list += `<li class="list-group-item list-group-item-primary">${listaEquipos1[o].nombre + " vs " + listaEquipos1[++o].nombre}</li>`;


                o++;
            }

            $(`#mostrar_campeonato`).append(`<div class="card text-white bg-info mb-3" id="fecha" style="max-width: 18rem;">
                                             <div class="card-header">Fecha ${fecha}</div>
                                                <div class="card-body">
                                                <h5 class="card-title">
                                                    <ol>
                                                        ${list}
                                                    </ol>
                                                </h5>
                                                
                                            </div>
                                        </div>`);


            o = 0;
            let a = listaEquipos1.pop();
            listaEquipos1.unshift(a);
        }






    } else {
        $('#notificacion').append(`<div class="alert alert-danger" role="alert">
                                            Cargue un numero par de equipos
                                        </div>`);

        $('#notificacion').fadeOut(5000);

    }

}