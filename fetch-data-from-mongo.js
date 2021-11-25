var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/slack-data";

dbName= "slack-data"
collectionName="slack-messages"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);
    dbo.collection(collectionName).find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

        db.close();
    });
});
