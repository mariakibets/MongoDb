const { Router } = require('express');
const IngredientController =  require('../controllers/ingredient.controller');

const ingredientRouter = Router();

ingredientRouter.get('/', IngredientController.getAllIngredient);
ingredientRouter.post('/', IngredientController.addIngridient);

module.exports = ingredientRouter;



