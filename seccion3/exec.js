const exec = require('child_process').exec;

// exec('explorer');

exec("git version", (err, stdout)=> {
    if(err){
        throw err;        
    }
    console.log(stdout);
});