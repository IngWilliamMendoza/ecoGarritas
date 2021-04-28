// var fs = require('fs');

// RENOMBRAR MANERA SINCRONA

// try{
//     fs.renameSync('./archivoRenombrar.txt', './renombrado.txt');
// }catch(err){
//     console.log(err);
// }

// RENOMBRAN MANERA ASINCRONA
// fs.rename('./renombrado.txt','renombradoAgain.txt', (err)=>{
//     if (err) {
//         console.log(err);        
//     }else{
//         console.log("Archivo renombrado \n")
//     }
// });

// BORRAR MANERA SINCRONA

// try{
//     fs.unlinkSync('./renombradoAgain.txt');
// }catch(err){
//     console.log(err);
// }

// BORRAR MANERA ASINCRONA
// fs.unlink('renombradoAgain.txt', (err)=>{
//     if (err) {
//         console.log(err);        
//     }else{
//         console.log("Archivo eliminado\n")
//     }
// });

// MOVER RENOMBRAR DIRECTORIOS
// var fs = require('fs');

//MOVER DIRECTORIO
// fs.renameSync('./uno/dos','./dos');
// console.log('carpeta movida');

//BORRAR CARPETA DE FORMA SINCRONA
// fs.rmdirSync('./uno');
// console.log('carpeta borrada');

//borrar los archivos que contiene
// fs.readdirSync('./dos').forEach((archivo)=>{
//     fs.unlinkSync('./dos/'+archivo);
// });

// BORRRAMOS LA CARPETA EN FORMA ASINCRONA
// fs.rmdir('./dos',(err)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('Carpeta Borrada');
//     }
// })

// BORRAR Y MOVER UN ARCHIVO

//RENOMBRAR
var fs = require("fs");

// fs.rename('./archivoss/archivo.txt','./archivoss/Miarchivo.txt', (err) => {
//     if(err) throw err;
//     console.log('Archivo renombrado');
// });

// MOVER
fs.rename('./archivoss/Miarchivo.txt','./Miarchivo.txt', (err) => {
    if(err) throw err;
    console.log('Archivo movido');
});


