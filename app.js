const e = require('express');
const express = require('express');
const app = express();


app.use(express.json());

app.get('/');
app.post('/');
app.get('/: saladId');
app.patch('/: saladId');
app.delete('/: saladId');



module.exports = app;