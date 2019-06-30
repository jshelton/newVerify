// http://nodejs.org/api.html#_child_processes

var exec = require('child_process').exec;
var child;
child = exec("md5 '/Volumes/Seagate Backup Plus Drive/Import/100GOPRO/GP042722.MP4'", function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
	console.log('exec error: ' + error);
    }
});


