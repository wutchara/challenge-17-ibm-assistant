const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  version: process.env.WATSON_VERSION,
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_ASSISTANT_API_KEY,
  }),
  serviceUrl: process.env.WATSON_URL,
  disableSslVerification: true,
});

exports.getMessage = body =>
  new Promise((resolve, reject) => {
    console.log('body', body);
    if (body.session_id && body.input) {
      assistant.message({
        assistantId: process.env.WATSON_ASSISTANT_ID,
        sessionId: body.session_id,
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
    } else {
      reject({
        code: 400,
        message: "missing input or session_id",
      });
    }
  });

exports.createSession = body =>
  new Promise((resolve, reject) => {
    console.log('body', body);
    assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    }).then(res => {
        const result = JSON.stringify(res.result, null, 2);
        console.log('createSession', result);
        resolve(result);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

exports.removeSession = body =>
  new Promise((resolve, reject) => {
    console.log('body', body);
    assistant.deleteSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
      sessionId: body.session_id,
    }).then(res => {
        const result = JSON.stringify(res.result, null, 2);
        console.log('removeSession', result);
        resolve(result);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
