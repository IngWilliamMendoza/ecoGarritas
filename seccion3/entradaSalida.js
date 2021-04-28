// process.stdout.write("Hola ");
// process.stdout.write("mundo \n\n");

var preguntas = ["Cual es tu nombre?", "Cual es tu apellido?"];
var respuestas = [];

function pregunta(i){
    process.stdout.write(`\n ${preguntas[i]}`);
    process.stdout.write(": ");
}

process.stdin.on('data', (data) => {
    // process.stdout.write('\n'+ data.toString().trim()+'\n');
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }else{
        process.exit();
    }
});

process.on('exit', () => {
    process.stdout.write("\nHasta la vista, "+ respuestas[0]+" "+respuestas[1]+"\n\n");
})

pregunta(0)