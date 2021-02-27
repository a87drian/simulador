//ingresar equipo tiene que haber mas de un equipo
entrada = ingresarEquipo();
if(entrada.length < 1) {
    alert("Debe ingresar al menos dos equipos");
}else {
    alert("ingresó " + entrada + " equipos" )
}
//elegir dia y horario
//mostrar canchas disponibles 
//agendar turno

function ingresarEquipo() {
    let entrada = prompt("Ingresar Nombre de los Equipos o q para continuar");
    let equipos = [];

    while(entrada != "q") { 
        equipos.push(entrada);
        
        entrada = prompt("Ingresar Nombre de los Equipos o q para continuar");
    }
    return equipos;
}