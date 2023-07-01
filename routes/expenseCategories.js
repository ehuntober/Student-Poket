// views/expenseCategories.js
const express = require('express');
const router = express.Router();
const expenseCategoryController = require('../controllers/expenseCategoryController');

// Create a new expense category
router.post('/', expenseCategoryController.createExpenseCategory);

// Get all expense categories
router.get('/', expenseCategoryController.getAllExpenseCategories);

// Get a single expense category
router.get('/:id', expenseCategoryController.getExpenseCategoryById);

// Update an expense category
router.put('/:id', expenseCategoryController.updateExpenseCategory);

// Delete an expense category
router.delete('/:id', expenseCategoryController.deleteExpenseCategory);

module.exports = router;
