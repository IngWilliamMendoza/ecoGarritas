var http = require('http');
var data = require('./alumnos.json');

http.createServer((req, res) => {
    if(req.url ==='/'){
        res.writeHead(200,{'Content-type':'text/json'});
        res.end(JSON.stringify(data));    
    }else if(req.url ==='/honor'){
        filtraHonor(res);
    }else if(req.url ==='/deshonor'){
        filtraDeshonor(res);
    }
    
    else{
        res.writeHead(404,{'Content-type':'text/plain'});
        res.end('404 Ups, no tenemos esa informacion');
    }
}).listen(3000);
console.log('Servidor puerto 3000');

function filtraHonor(res){
    var honor = data.filter((alumno)=>{
        return alumno.cali >= 9;
    });
    res.end(JSON.stringify(honor))
}

function filtraDeshonor(res){
    var deshonor = data.filter((alumno)=>{
        return alumno.cali <= 7;
    });
    res.end(JSON.stringify(deshonor))
}