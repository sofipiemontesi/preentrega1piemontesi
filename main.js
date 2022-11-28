let nombre= prompt("Bienvenido a LA FêTE, ¿Cuál es tu nombre?");
let evento= prompt(`Hola ${nombre}, ¿Cuál será tu evento?`);
let catering= 100;
let ambientacion= 30;
let barra= 40;
let personal= 10;
let musica= 10;
let valorFinal= 0;
let invitados= parseInt(prompt(`${nombre}, ¿Cuántos invitados tendrá tu ${evento}?`));
if(invitados<=300){
    alert("Para esa cantidad de invitados debes seleccionar uno de los siguientes sitios: \n1.Bodega Septima. \n2.Bodega Salentein. \n3.Divina Marga. \n4.Bodega Luis S. Correas.");
}else{
    alert("Para esa cantidad de invitados debes seleccionar uno de los siguientes sitios: \n1.Bodega Durigutti. \n2.Finca Martinez. \n3.Bodega Lagarde. \n4.Estancia Atamisque.");
}
function seleccionLugar(){
    let seleccion= false;
    for (i=1; i<=3; i++){
        let lugar= parseInt(prompt(`${nombre}, ¿En dónde te gustaría realizar tu ${evento}?`));
        if(lugar >0 && lugar < 5){
        alert(`Seleccionaste la opción nº${lugar}`);
        seleccion=true;
        break;
        }else{
            alert("No ha seleccionado ninguna opción.");
        }
    }
    return seleccion;
}
let lugarConfirmado= seleccionLugar();
if(lugarConfirmado){
    let servicios= prompt("¿Qué servicios desea contratar? (Seleccione uno por uno): \n1-Catering.($100/pers) \n2-Ambientación.($30/pers) \n3-Barra.($40/pers) \n4-Personal.($10/pers) \n5-Música.($10/pers) \n0-Finalizar.");
    while(servicios!="0"){
        switch (servicios){
            case "1":    
                alert(`Contrataste el servicio de catering, el valor es $${catering*invitados}`);
                valorFinal= valorFinal+(catering*invitados);
                break;
            case "2":
                alert(`Contrataste el servicio de ambientación, el valor es $${ambientacion*invitados}`);
                valorFinal= valorFinal+(ambientacion*invitados);
                break;
            case "3":
                alert(`Contrataste el servicio de barra, el valor es $${barra*invitados}`);
                valorFinal= valorFinal+(barra*invitados);
                break;
            case "4":
                alert(`Contrataste el servicio de personal, el valor es $${personal*invitados}`);
                valorFinal= valorFinal+(personal*invitados);
                break;
            case "5":
                alert(`Contrataste el servicio de música, el valor es $${musica*invitados}`);
                valorFinal= valorFinal+(musica*invitados);
                break;
            default:
                alert("No contamos con ese servicio");
                break;
        }
        servicios= prompt("¿Qué servicios desea contratar? (Seleccione uno por uno): \n1-Catering.($100/pers) \n2-Ambientación.($30/pers) \n3-Barra.($40/pers) \n4-Personal.($10/pers) \n5-Música.($10/pers) \n0-Finalizar.");
    }
    alert(`El valor total de tu evento es $${valorFinal}`);
}else{
    alert("Gracias por su visita.");
}