var ffmpeg = require('fluent-ffmpeg');

ffmpeg('/Volumes/Seagate\ Backup\ Plus\ Drive/JS\ iPhone/IMG_5371.MOV')
    .output('-')
    .format('null')
    .on('error', function(err) {
	console.log('An error occurred: ' + err.message);
    })
    .on('end', function() {
	console.log('Processing finished !');
    })
    .run();
