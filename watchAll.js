// One-liner
require('chokidar').watch('/Volumes/Seagate Backup Plus Drive/Import/2017-06', {ignored: /[\/\\]\./}).on('all', function(event, path) {
  console.log(event, path);
});
