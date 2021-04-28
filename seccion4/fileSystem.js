// var fs = require("fs");

// MANERA SICRONA  PARA LISTAR LOS ARCHIVOS
// var archivos = fs.readdirSync('./');
// console.log(archivos);

// MANERA ASINCRONA PARA LISTAR LOS ARCHIVOS
// fs.readdir('./', (err,archivos)=>{
//     if(err){
//         throw err;
//     }
//     console.log(archivos);
// });

// console.log('leyendo los archivos del directorio');

// LEER UN ARCHIVO DE TEXTO

// var fs = require('fs');
// var path = require('path');

// fs.readdir('./archivos', (err, archivos) => {
//     archivos.forEach((archivo)=>{
//         var file = path.join(__dirname, 'archivos', archivo);
//         var datos = fs.statSync(file);
        
//         if(datos.isFile() && archivo!== '.DS_Store'){
//             fs.readFile(file, "UTF-8", (err, data)=>{
//                 console.log(archivo, data);
//                 console.log('----+------+-----+');                
//             });
//         }
//     });
// });

// CREAR ARCHIVOS Y AÑADIR DATOS

// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// var fs = require('fs');

// rl.question('Dame la fecha de tus pendientes (YYYYMMDD)', (data) =>{
//     fs.writeFileSync(data+".txt", "Pendientes para el dia" +data+"\n");

//     rl.setPrompt('Pendiente para el dia de hoy o fin: ');
//     rl.prompt();
//     rl.on('line', (pendiente)=>{
//         fs.appendFileSync(data+'.txt', pendiente.trim()+"\n");
//         if (pendiente.toLocaleLowerCase().trim()=== 'fin') {
//             rl.close();
//         }else{
//             rl.setPrompt('Pendiente para el dia de hoy o fin: ');
//             rl.prompt();
//         }
//     })
// })
// rl.on('close',()=>{
//     console.log('\nGracias Totales')
//     process.exit();
// })

// CREAR UN DIRECTORIO

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require('fs');
var path = require('path');
var dir = 'pendientes';

if (fs.existsSync(dir)){
    console.log('la carpeta ya existe \n\n');
}else{
    fs.mkdir(dir,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('carpeta creada \n\n');
        }
    })
}

rl.question('Dame la fecha de tus pendientes (YYYYMMDD)', (data) =>{
    var archivo = path.join(__dirname,dir,data+'.txt');

    fs.writeFileSync(archivo, "Pendientes para el dia" +data+"\n");

    rl.setPrompt('Pendiente para el dia de hoy o fin: ');
    
    rl.prompt();
    rl.on('line', (pendiente)=>{
        fs.appendFileSync(archivo, pendiente.trim()+"\n");

        if (pendiente.toLowerCase().trim()=== 'fin') {
            rl.close();
        }else{
            rl.setPrompt('Pendiente para el dia de hoy o fin: ');
            rl.prompt();
        }
    })
})

rl.on('close',()=>{
    console.log('\nGracias Totales')
    process.exit();
})












