const axios = require('axios');

// Slack token
const slackToken = 'xoxb-2777226296161-2791391846960-jvEeMOgFasuFxL4ydJOOtpxR';

// Catch in console if error occurs
run().catch(err => console.log(err));

//async function 
async function run() {
  const url = 'https://slack.com/api/chat.postMessage';

  // Write a simple message
  const res = await axios.post(url, {
    channel: '#test',
    text: 'hello there, just another test of posting simple message!'
  }, { headers: { authorization: `Bearer ${slackToken}` } });
  
  console.log('Done', res.data);
}


