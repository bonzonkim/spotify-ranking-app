const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const apiRouter = require('./routes/api');
const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.json());
app.use(cookieParser());

// '/api' 라우터
app.use('/api', apiRouter);

app.get('/', function (_, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(9000, () => {
  console.log('SERVER LISTENING ON 9000');
});
