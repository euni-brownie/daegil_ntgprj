const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const api = require('./server/routes/index');

app.use(bodyParser.json());
app.use('/api', api); // 리액트 서버랑 안겹치려면 /api 필요할듯!


if (process.env.NODE_ENV === 'production') {
    console.log("start production ...")
   // Serve any static files
   app.use(express.static(path.join(__dirname, 'client/build')));
 
   // Handle React routing, return all requests to React app
   app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
   });
 }

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`${process.env.PORT}& Listening on port ${port} ...`));