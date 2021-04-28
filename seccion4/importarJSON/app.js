// // // leer archivos JSON sin el filesystem

// // var grafica = require('./grafica.json');
// // console.log(grafica.arrayColores);

// // for (let i = 0; i < 5; i++){
// //     console.log(grafica.arrayColores[i].nombreColor)
// // }

// // leer archivos JSON con el fileSystem
// var fs = require("fs");

// // fs.readFile('./grafica.json', (err, datos) =>{
// //     console.log(JSON.parse(datos).arrayColores);
// // });

// // fs.readFile('./grafica.json', (err, datos) =>{
// //     grafica = JSON.parse(datos);
// //     for(let i = 0; i < 5; i++){
// //         console.log(grafica.arrayColores[i].nombreColor, grafica.arrayColores[i].valorHexadec);
// //     }
// //});

// // LEER UN ARCHIVO GRANDE COMO STREAM
// //var archivo = fs. readFileSync('./texto.txt');

// var stream = fs.createReadStream('./texto.txt','UTF-8');
// var texto = '';

// stream.once('data', ()=>{
//     console.log('Inicio de carga');
// });

// stream.on('data', (textoParcial)=>{
//     console.log('Caracteres leidos: ', textoParcial.length);
//     texto += textoParcial;
// });

// stream.on('end', ()=>{
//     console.log('Texto leido: ', texto.length);
// })

var a = ['a'];
a[5]= 'b';
console.log(a.length);