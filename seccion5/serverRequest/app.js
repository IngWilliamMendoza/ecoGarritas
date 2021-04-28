var https = require('https');
var fs = require('fs');


var opciones = {
    hostname: 'es.wikipedia.org',
    port: 443,
    path: '/wiki/Node.js',
    method: 'GET'
}

var req = https.request(opciones, (res)=>{
    var respuesta = '';
    console.log('Estatus servidor: ', res.statusCode);
    res.setEncoding('utf-8');

    res.once('data', (data)=>{
        console.log(data);
    });
    res.on('data', (data)=>{
        console.log(data.length);
        respuesta += data;
    });
    res.on('end', ()=>{
        fs.writeFile('nodejs.html', respuesta, (err) =>{
            if(err) throw err;
            console.log('Proceso Terminado');
        });
    });
    
});

req.on('error', (err)=>{
    console.log('Error en la solicitud',err);
});
req.end();