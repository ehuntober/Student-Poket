
const ExpenseCategory = require('../models/ExpenseCategory');


const createExpenseCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newExpenseCategory = new ExpenseCategory({ name, description });
    await newExpenseCategory.save();
    res.status(201).json(newExpenseCategory);
  } catch (error) {
    console.error('Error creating a new expense category', error);
    res.status(500).json({ error: 'An error occurred while creating a new expense category' });
  }
};


const getAllExpenseCategories = async (req, res) => {
  try {
    const expenseCategories = await ExpenseCategory.find();
    res.json(expenseCategories);
  } catch (error) {
    console.error('Error fetching expense categories', error);
    res.status(500).json({ error: 'An error occurred while fetching expense categories' });
  }
};


const getExpenseCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const expenseCategory = await ExpenseCategory.findById(id);
    if (!expenseCategory) {
      return res.status(404).json({ error: 'Expense category not found' });
    }
    res.json(expenseCategory);
  } catch (error) {
    console.error('Error fetching expense category', error);
    res.status(500).json({ error: 'An error occurred while fetching the expense category' });
  }
};


const updateExpenseCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedExpenseCategory = await ExpenseCategory.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (!updatedExpenseCategory) {
      return res.status(404).json({ error: 'Expense category not found' });
    }
    res.json(updatedExpenseCategory);
  } catch (error) {
    console.error('Error updating expense category', error);
    res.status(500).json({ error: 'An error occurred while updating the expense category' });
  }
};


const deleteExpenseCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpenseCategory = await ExpenseCategory.findByIdAndDelete(id);
    if (!deletedExpenseCategory) {
      return res.status(404).json({ error: 'Expense category not found' });
    }
    res.json(deletedExpenseCategory);
  } catch (error) {
    console.error('Error deleting expense category', error);
    res.status(500).json({ error: 'An error occurred while deleting the expense category' });
  }
};

module.exports = {
  createExpenseCategory,
  getAllExpenseCategories,
  getExpenseCategoryById,
  updateExpenseCategory,
  deleteExpenseCategory,
};
