 const mongoose = require('mongoose')
 const { Schema } = mongoose;
 const Salad = require('./Salad');
const Ingridient = require('./Ingridient');

 const DB = process.env.DB_NAME || 'fe-test';

 mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`)
 .catch(err => {
    console.log('connect falied');
    next(err);
 })



module.exports = {
   Salad, Ingridient
}
