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

  // Write a simple message
  // const res = await axios.post(url, {
  //   channel: '#test',
  //   text: 'Great! Test is successful!'
  // }, { headers: { authorization: `Bearer ${slackToken}` } });
  
  
  // Can also customize name and avatar 
  const res = await axios.post(url, {
    channel: '#election-campaign',
    text: 'Vote for us!',
    username: 'Chat App',
    icon_emoji: ':+1:'
  }, { headers: { authorization: `Bearer ${slackToken}` } });
  console.log('Done', res.data);
}

// Write Blocks with some formatting
async function run() {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, {
    channel: '#election-campaign',
    blocks: [
      {
        type: 'section',
        text: { type: 'mrkdwn', text: 'Our New Candidate!' },
        fields: [
          { type: 'mrkdwn', text: '*Name*\nAli Jan' },
          { type: 'mrkdwn', text: '*Sign*\nBat' },
        ]
      },
      {
        type: 'image',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
        alt_text: 'qrcode'
      }
    ],
    username: 'Test App',
    icon_emoji: ':+1:'
  }, { headers: { authorization: `Bearer ${slackToken}` } });
  console.log('Markdown write done!!', res.data);
}

