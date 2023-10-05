const {Router} = require('express');
const SaladController = require('../controllers/salad.controller');

const saladRouter = Router();

saladRouter.post('/', SaladController.cerateSalad);
saladRouter.get('/: saladId', SaladController.getAlllSalads); 
saladRouter.patch('/: saladId');
saladRouter.delete('/: saladId');


module.exports = saladRouter;