const express = require('express');
const router = express.Router();
const {
  createIngredient,
  listIngredients,
  getIngredientsByCategory,
} = require('../controller/ingredientController');

router.get('/', listIngredients);
router.post('/', createIngredient);
router.get('/category/:id', getIngredientsByCategory);

module.exports = router;
