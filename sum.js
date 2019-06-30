var filename = '/Volumes/Seagate Backup Plus Drive/Import/100GOPRO/GP042722.MP4'
var crypto = require('crypto');
var fs = require('fs');

var md5sum = crypto.createHash('md5');

var s = fs.ReadStream(filename);
s.on('data', function(d) {
  md5sum.update(d);
});

s.on('end', function() {
  var d = md5sum.digest('hex');
  console.log(d + '  ' + filename);
});
