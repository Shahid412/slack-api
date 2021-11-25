var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/slack-data";
var mongoose = require( 'mongoose' )

const mClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true  });


// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");

// WebClient insantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient("xoxb-2777226296161-2791391846960-jvEeMOgFasuFxL4ydJOOtpxR", {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});

// Store message
let message;

const DB = mClient.db("slack-data");

// Fetch conversation history using the channelID 
async function fetchMessage(id) {
  try {
    // Call the conversations.history method using the built-in WebClient
    const result = await client.conversations.history({
      // The token you used to initialize your app
      token: "xoxb-2777226296161-2791391846960-jvEeMOgFasuFxL4ydJOOtpxR",
      channel: id,
      inclusive: true,
    });
    messages = result.messages
    //tss = messages.ts
    //console.log(messages)
    //console.log(result)
    for (i = 0; i < messages.length; i++) {
        console.log(messages[i].text);
    }

    console.log("**************************************************");
    console.log("Insertion starts here");
    console.log("**************************************************");

    //////////////////////////////
    // insert into db (mongodb) //
    //////////////////////////////
        //const collection = DB.collection("messages");
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("slack-data");
            for (i = 0; i < messages.length; i++) {
                var myobj = {
                type: messages[i].type, 
                subtype: messages[i].subtype, 
                ts: messages[i].ts,
                user: messages[i].user,
                text: messages[i].text,
                inviter: messages[i].inviter
            };
            dbo.collection("slack-messages").insert(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
            });
        }
          });
      console.log("Inserted into MongoDB")
    
  }
  catch (error) {
    console.error(error);
  }
}

channelID="C02N1UF7FM5"
//another channel id :C02NKSFAAJW
// Fetch message using a channel ID

fetchMessage(channelID);

