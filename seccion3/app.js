var path = require("path");
var saludo = "Hola Mundo";

console.log(__filename);
console.log(__dirname);
console.log(`El archivo es ${path.basename(__filename)} se ejecuta`);