const { Router } = require('express');
const saladRouter = require('./salad');
const ingridientRouter = require('./ingridients');

const router = Router();

router.use('/salads', saladRouter);


module.exports = router;