var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('/Volumes/Seagate Backup Plus Drive/Import/100GOPRO/mediaConsistency.db');

db.serialize(function() {

//  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//  for (var i = 0; i < 10; i++) {
//      stmt.run("Ipsum " + i);
//  }
//  stmt.finalize();

//  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//      console.log(row.id + ": " + row.info);
    //  });

    db.each("SELECT name, status, chksum AS sum from files",function (err,row){
	if(!err){
	    console.log("name: " +row.name + " Stat: " + row.status + " Sum: " + row.sum);
	}

    });
});

db.close();
