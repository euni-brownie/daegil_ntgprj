const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index');

app.use(bodyParser.json());
app.use('/api', api); //원래는 /api 였던것을 /로 수정 localhost:3001/api 대신 localhost:3001/로 접속하려고~ ==>NO 리액트랑 안겹치려면 /api 필요할듯!

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`${process.env.PORT}& Listening on port ${port} ...`));