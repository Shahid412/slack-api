var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/slack-data";

const express= require('express')
const app = express()

dbName= "slack-data"
collectionName="slack-messages"

app.get('/', (req, res)=>{

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(dbName);
        dbo.collection(collectionName).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result)

            db.close();
        });
    });
    
})

app.listen(3000, ()=> {
    console.log('Express server listening at 3000 ... ')
})
