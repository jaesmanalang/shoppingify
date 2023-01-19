const express = require('express');
const router = express.Router();
const {
  createCategory,
  listCategories,
} = require('../controller/categoryController');

router.get('/', listCategories);
router.post('/', createCategory);

module.exports = router;
