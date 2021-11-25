var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/slack-data";

// 2. Create collection 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("slack-data");
    dbo.createCollection("Addresses", function(err, res) {
        if (err) throw err;
        console.log("'Addresses' Collection Created!");
        db.close();
    });
}); 
