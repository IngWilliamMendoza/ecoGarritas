var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
    if(req.method==="GET"){
        res.writeHead(200,{"Content-type":"text/html"});
        fs.createReadStream("./public/formulario.html","UTF-8").pipe(res);
    }else if(req.method==="POST"){
        var data = "";
        req.on("data",(chunck)=>{
            data += chunck;
        });
        req.on("end",()=>{
            res.writeHead(200,{"Content-type":"text/html"});
            res.end(data);
        });
    }
}).listen(3000);
console.log("Servidor 3000");