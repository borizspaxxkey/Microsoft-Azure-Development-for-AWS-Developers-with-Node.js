var express = require('express');
var router = express.Router();
var { MongoClient } = require('mongodb');
var books = require('./../models/books');

const title = process.env.TITLE;
/* GET home page. */
router.get('/', function (req, res, next) {
  const URL = 'mongodb://ebuka:2I5fBT5nLyeDcvGnOiVeHgdecsStzqE2a21FI7uuEz2d83HQQzXBHygPiaElDJz69hdQ2sdVV48TnrBA5h4oWQ==@ebuka.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@ebuka@';
  const dbName = 'Library';
  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(URL);
      const db = client.db(dbName);
      const response = await db.collection('books').insertMany(books);
      res.json(response);
    } catch (err) {
      console.log(err);
    }
  }());
});

module.exports = router;
