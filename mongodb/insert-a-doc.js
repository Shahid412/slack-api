var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/slack-data";

// 3. Insert a document in collection 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("slack-data");
    var myobj = { 
        state: "Punjab", 
        city: "Lahore", 
        area: "Model Town",
        street: "Main street"
    };
    dbo.collection("addresses").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted in Addresses collection!");
        db.close();
    });
});
