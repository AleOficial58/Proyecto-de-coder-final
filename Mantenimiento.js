mantenimiento = ["Activos Funcionando normalmente: ","Funcionando","en mantenimiento"]

document.write(Mantenimiento[0])

var mantenimiento = document.getElementById("mantenimiento");
mantenimiento.style.fontSize = "20px";


let pc1 = {
    nombre: "Servidores",
    latencia: "Buenos Aires",
    sistema: "16GB",
    espacio: "1TB"
};

let nombre = pc1 ["nombre"];
let latencia = pc1 ["latencia"];
let sistema = pc1 ["sistema"];
let espacio = pc1 ["espacio"];

frase = `Los ${nombre} de ${latencia} cuentan con un sistema de ${sistema}
con un almacenamiento de datos de ${espacio} para los sistemas de seguridad.

`

document.write(frase);
