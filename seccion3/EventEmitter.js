// var events = require('events').EventEmitter;
// var emisor = new events.EventEmitter();
// emisor.on("miEvento",(mensaje,status)=>{
//     console.log(status,mensaje);
// })
// emisor.emit('miEvento','Hola Mundo',200);

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Mascota = function(nombre){
    this.nombre = nombre;
}

util.inherits(Mascota, EventEmitter);

// crear instancia
var canela = new Mascota('Canela');
canela.on('dice',function(dice){
    console.log(this.nombre+" dice: "+ dice);
})

canela.emit("dice", "Guau, Guau, Guau")