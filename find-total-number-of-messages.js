// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");

// WebClient insantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient("xoxb-2777226296161-2791391846960-jvEeMOgFasuFxL4ydJOOtpxR", {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});

async function findConversation(name) {
    // Store conversation history
    let conversationHistory;
    // ID of channel you watch to fetch the history for
    let channelId = "C02NKSFAAJW";

    try {
        // Call the conversations.history method using WebClient
        const result = await client.conversations.history({
            channel: channelId
        });
  
        conversationHistory = result.messages;
  
        // Print results
        console.log(conversationHistory.length + " messages found in " + channelId);
    }
    catch (error) {
        console.error(error);
    }
}

// Find conversation with a specified channel `name`
findConversation("help-dev");
