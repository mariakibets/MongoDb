const { Salad } = require ('../models');


module.exports.cerateSalad = async (req, res, next) => {
    try{
       const { body } = req;
       const salad = await Salad.create(body);
       return res.status(201).send(salad);
    }catch(error){
        next(error);
    }
}

module.exports.getSalad = async (req, res, next) => {
    try{
      const { params: {saladId}} = req;
     const salad = await Salad.findById(saladId);

     if(!salad){
        return res.status(404).send('The salad is not found')
     }

     return res.status(200).send(salad)
    }catch (erorr) {
      next(erorr)
    }
}

module.exports.getAlllSalads = async (req, res, next) => {
try{
  const allSalads = await Salad.find({});
  return res.status(201).send(allSalads)
}catch(error){
    next(error)
}
}

module.exports.updateSalad = async (req, res, next) => {
try{
  const {body,  params: {saladId}} = req;
  const updated = await Salad.findByIdAndUpdate(saladId, body, {returnDocument: 'after'});
  return res.status(201).send(updated);
}catch(error){
    next(error)
}
}

module.exports.deleteSalad = async (req, res, next) => {
    try{
         const {params: {saladId}} = req;
          const deleteSalad =  await Salad.findByIdAndDelete(saladId)
          if(!deleteSalad){
            return res.status(404).send('not found');
          }
          return res.status(201).send(deleteSalad)
    }catch(error){
        next(error)
    }
}


module.exports