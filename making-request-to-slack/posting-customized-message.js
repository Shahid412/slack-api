// ********************************* //
// ****** Making the Request ******* //
// * Post message to #test channel * //
// ********************************* //

const axios = require('axios');

// Slack token
const slackToken = 'xoxb-2777226296161-2791391846960-jvEeMOgFasuFxL4ydJOOtpxR';

// Catch in console if error occurs
run().catch(err => console.log(err));

//async function 
async function run() {
  const url = 'https://slack.com/api/chat.postMessage';

  const res = await axios.post(url, {
    channel: '#election-campaign',
    text: 'this is an example of customzied message!',
    username: 'nodejs-app',
    icon_emoji: ':+1:'
  }, { headers: { authorization: `Bearer ${slackToken}` } });
  console.log('Done', res.data);
}

