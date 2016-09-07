var childProcess = require('child_process');
var cfork = require('cfork');
var workerPath = require('path').join(__dirname,'worker.js');
function forkWorker(){
    cfork({
        exec:workerPath,
        count:config.numCPUS,
    })
    .on('fork',function(worker){
        console.log('worker start');
    })
    .on('disconnect',function(workder){

    })
    .on('exit',function(worker,code,signal){

    });
}