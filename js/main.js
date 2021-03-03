class Equipo {
    constructor(nombre) {
        this.validarNombre(nombre);
    }
    validarNombre(nombre) {
        let nombreTrim = nuevoNombre.trim();
         if (nombreTrim.length > 2){
             this.nombre = nombreTrim;

         }
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
//ingresar equipo tiene que haber mas de un equipo
entrada = ingresarEquipo();
if (entrada.length < 1) {
    alert("Debe ingresar al menos dos equipos");
} else {
    alert("ingresó " + entrada + " equipos")
}
//elegir dia y horario
//mostrar canchas disponibles 
//agendar turno

function ingresarEquipo() {
    let entrada = prompt("Ingresar Nombre de los Equipos o q para continuar");
    let equipos = [];

    while (entrada != "q") {
        if (entrada.length != 0) {
            let equipo = new Equipo(entrada);
            equipos.push(equipo);

        }

        entrada = prompt("Ingresar Nombre de los Equipos o q para continuar");
    }
    return equipos;
}

//crear canchas
function crearCancha(){
    turnos = [];
    turnos.push(new Turno(dia,17,18));
    turnos.push(new Turno(dia,18,19));
    
    const cancha1 = new Cancha(1, turnos);
}
