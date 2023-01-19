const Category = require('../models/Category');
const asyncHandler = require('express-async-handler');

/**
 * Create Category
 */
const createCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const newCategory = new Category({
    title,
  });

  const savedCategory = await newCategory.save();
  res.status(201).send({
    message: 'Category added successfully',
    category: savedCategory,
  });
});

/**
 * List Categories
 */
const listCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.status(200).send({
    categories,
  });
});

module.exports = {
  createCategory,
  listCategories,
};
