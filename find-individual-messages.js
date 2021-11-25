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

// Fetch conversation history using the channelID 
async function fetchMessage(id) {
  try {
    // Call the conversations.history method using the built-in WebClient
    const result = await client.conversations.history({
      // The token you used to initialize your app
      token: "xoxb-2777226296161-2791391846960-jvEeMOgFasuFxL4ydJOOtpxR",
      channel: id,
      // In a more realistic app, you may store ts data in a db
      // latest: ts,
      // Limit results
      inclusive: true,
      // limit: 1
    });
    //console.log(result)
    messages=result.messages
    console.log(messages)
    // log each message text 
    for (i = 0; i < messages.length; i++) {
      console.log(messages[i].text);
    }
  }
  catch (error) {
    console.error(error);
  }
}

channelID="C02N1UF7FM5"
//another channel id :C02NKSFAAJW
// Fetch message using a channel ID

fetchMessage(channelID);
