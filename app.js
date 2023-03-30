const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use('/users', require('./routes/users'));

app.use((req, res, next) => {
  req.user = {
    _id: '6425b8697cd089f336f79e4e',
  };

  next();
});

app.listen(PORT);
