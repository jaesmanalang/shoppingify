const Ingredient = require('../models/Ingredient');
const asyncHandler = require('express-async-handler');

/**
 * Create Ingredient
 */
const createIngredient = asyncHandler(async (req, res) => {
  const { name, note, image, category } = req.body;
  const newIngredient = new Ingredient({
    name,
    note,
    image,
    category,
  });

  const savedIngredient = await newIngredient.save();
  res.status(201).json({
    message: 'Ingredient added successfully',
    ingredient: savedIngredient,
  });
});

/**
 * List Ingredients
 */
const listIngredients = asyncHandler(async (req, res) => {
  const ingredients = await Ingredient.find({});
  res.status(200).send({
    ingredients,
  });
});

/**
 * Get Ingredientd By Category
 */
const getIngredientsByCategory = asyncHandler(async (req, res) => {
  const ingredients = await Ingredient.find({ category: req.params.id });
  res.status(200).json({
    ingredients,
  });
});

module.exports = {
  createIngredient,
  listIngredients,
  getIngredientsByCategory,
};
