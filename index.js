require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser'),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
  parameterLimit: DEFAULT_PARAMETER_LIMIT,
  limit: DEFAULT_BODY_SIZE_LIMIT
});

const app = express();
const {ask, begin, end} = require('./controller');

app.use(bodyParser.json(bodyParserJsonConfig()));

app.get('/', (req, res) => res.send('Hello JA!'))
app.post('/ask', ask)
app.get('/start', begin)
app.post('/stop', end)

app.listen(3000, () => console.log('Listening on port 3000'))