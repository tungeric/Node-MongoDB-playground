const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

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

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if(err) return console.log(err)
    console.log('saved to database');
    res.redirect('/');
  });
});

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray(function(err, result) {
    if(err) return console.log(err);
    res.render('index.ejs', { quotes: result })
  });
});


// Update format:

// db.collections('quotes').findOneAndUpdate(
//   query, --which quote do we want to update?
//   update, --update the quote to the new one
//   options, --additional parameters, in this case we want to sort to grab the last quote by Hinkie
//   callback -- callback after the quote has been replaced - in this case we want to send the results back to the fetch request
// )
app.put('/quotes', (req, res) => {
  db.collections('quotes').findOneAndUpdate(
    { name: 'Sam Hinkie' },
    {
      $set: {
        name: req.body.name,
        quote: req.body.quote
      }
    },
    { sort: {_id:-1 }, upsert: true },
    (err, result) => {
      if (err) return res.send(err);
      res.send(result);
    }
  )
});