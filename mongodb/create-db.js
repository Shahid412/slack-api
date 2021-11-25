///////////////////////////
// Working with MongoDB //
///////////////////////////

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/slack-data";

// 1. Creating database 'slack-data'
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("'slack-data' Database created!");
    db.close();
});

