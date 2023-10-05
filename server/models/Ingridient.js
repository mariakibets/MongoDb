const mongoose = require('mongoose')
const { Schema } = mongoose;

const ingridientSchema = new Schema ( {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});

const Ingridient = mongoose.model('Ingredient', ingridientSchema);

module.exports = Ingridient;