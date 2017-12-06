const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb://admin:admin@ds131826.mlab.com:31826/mongo_playground';
let db;

MongoClient.connect(url, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

// app.listen(3000, function() {
//   console.log('listening on 3000');
// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if(err) return console.log(err)
    console.log('saved to database');
    res.redirect('/');
  });
});

app.get('/quotes', (req, res) => {
  db.collection('quotes').find().toArray(function(err, results) {
    console.log(results);
  });
});