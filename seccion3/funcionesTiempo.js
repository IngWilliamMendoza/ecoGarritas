var tiempo = 3000;
var tiempoActual = 0;
var tiempoIntervalo = 50;
var porcien  = 0;

function porcentaje(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write("Porcien: "+p+"%");
}

var intervalo = setInterval(function(){
    tiempoActual += tiempoIntervalo;
    porcien = Math.floor((tiempoActual/tiempo)*100);
    porcentaje(porcien);
    // console.log("Tiempo transcurrido: "+(tiempoActual/1000)+"segundos\n");

},tiempoIntervalo)

setTimeout(function(){
    clearInterval(intervalo);
    porcentaje(100);
    console.log("\nGame Over\n");
}, tiempo)

porcentaje(0);