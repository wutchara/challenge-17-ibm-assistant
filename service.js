const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: process.env.WATSON_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_ASSISTANT_API_KEY,
  }),
  serviceUrl: process.env.WATSON_URL,
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    console.log('input', body.input);
    assistant.message({
      assistantId: process.env.WATSON_ASSISTANT_ID,
      sessionId: '{session_id}',
      input: {
        'message_type': 'text',
        'text': body.input
        }
      })
      .then(res => {
        const result = JSON.stringify(res.result, null, 2);
        console.log(result);
        resolve(result);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });