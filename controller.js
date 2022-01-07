const getMessage = require('./service').getMessage;

exports.ask = (req, res, next) => {
  return getMessage(req.body)
    .then(output => {
      res.status(200);
      res.send(output);
    })
    .catch((e) => {
      console.error(e);
      res.status(e.code || 500);      
      res.send(e);
      next();
    });
};