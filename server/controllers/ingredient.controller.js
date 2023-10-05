const { Ingridient } = require('../models');

module.exports.addIngridient = async(req, res, next) => {
    try{
const { body } = req;
const created = await Ingridient.create(body);
return res.status(201).send(created);
    }catch (error){
        next (error)
    }
}


module.exports.getAllIngredient = async (req, res, next) => {
    try{
      const all =  await Ingridient.find({});
      return res.status(201).send(all);
    }catch(error){
        next (errror)
    }
}