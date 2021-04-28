var spawn = require('child_process').spawn;
var cp = spawn('node',['numeros']);

cp.stdout.on("data", (data)=>{
    console.log(`Baloto: ${data.toString().trim()}`);
});

process.stdin.on('data',(data)=>{
    console.log('Buena suerte...')
    process.exit();
})