// controllers/expenseController.js
const Expense = require('../models/expense');

const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    console.error('Error fetching expenses', error);
    res.status(500).json({ error: 'An error occurred while fetching expenses' });
  }
};

const createExpense = async (req, res) => {
  try {
    const { name, amount, budgetId } = req.body;
    const newExpense = new Expense({
      name,
      amount,
      budgetId,
    });

    await newExpense.save();

    res.status(201).json(newExpense);
  } catch (error) {
    console.error('Error creating a new expense', error);
    res.status(500).json({ error: 'An error occurred while creating a new expense' });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
};
