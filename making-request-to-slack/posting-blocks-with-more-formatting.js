// ********************************* //
// ****** Making the Request ******* //
// * Post message to #test channel * //
// ********************************* //

const axios = require('axios');

// Slack token
const slackToken = 'xoxb-2777226296161-2791391846960-jvEeMOgFasuFxL4ydJOOtpxR';

// Catch in console if error occurs
run().catch(err => console.log(err));

// Write Blocks with some formatting
async function run() {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, {
    channel: '#election-campaign',
    blocks: [
      {
        type: 'section',
        text: { type: 'mrkdwn', text: 'Our another Candidate from Punjab!' },
        fields: [
          { type: 'mrkdwn', text: '*Name*\nMir Dara' },
          { type: 'mrkdwn', text: '*Sign*\nLion' },
        ]
      },
      {
        type: 'image',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png',
        alt_text: 'qrcode'
      }
    ],
    username: 'Express-app',
    icon_emoji: ':+1:'
  }, { headers: { authorization: `Bearer ${slackToken}` } });
  console.log('Markdown write done!!', res.data);
}
