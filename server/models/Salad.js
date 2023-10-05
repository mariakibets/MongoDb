const mongoose = require('mongoose')
const { Schema } = mongoose;


const saladSchema = new Schema({
    name:{
       type:  String,
       required:true
    },
    weight: {
        type:  Number,
        required : true,
    },
    ingredients:[ {
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }],
    sauce: String,
    dietType:  String,
    isSpicy: Boolean,
    expired: {
        type:  Date,
        required: true,
        validate : {
            validator: (v) => v > new Date()
        }
    }

});

const Salad = mongoose.model('Salad', saladSchema);

module.exports = Salad;
