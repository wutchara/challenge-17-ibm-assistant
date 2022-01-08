const { getMessage, createSession,  removeSession} = require('./service');

const handleSuccess = (res, output) => {
  res.status(200);
  // res.json(output);
  res.send(JSON.parse(output));
};

const handleFailed = (res, e) => {
  console.error(e);
  res.status(e.code || 500);      
  res.send(e);
};

exports.ask = (req, res, next) => {
  return getMessage(req.body)
    .then(output => {
      handleSuccess(res, output);
    })
    .catch((e) => {
      handleFailed(res, e);
      next();
    });
};

exports.begin = (req, res, next) => {
  return createSession(req.body)
    .then(output => {
      handleSuccess(res, output);
    })
    .catch((e) => {
      handleFailed(res, e);
      next();
    });
};

exports.end = (req, res, next) => {
  return removeSession(req.body)
    .then(output => {
      handleSuccess(res, output);
    })
    .catch((e) => {
      handleFailed(res, e);
      next();
    });
};
