const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const Database = require('./Database');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = new Database({
    user:'reunionou',
    host: 'localhost',
    password:'',
    database:'reunionou',
  })


var del = db.connection._protocol._delegateError;

db.connection._protocol._delegateError = function (err, sequence) {
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};


app.get('/', (req, res) => {
  res.send('Hello World! This a test for Reunionou app')
});



app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});

require('./evenements/evenements.js')(app,db);
require('./membres/membres.js')(app,db);
require('./participation/participation.js')(app,db);
