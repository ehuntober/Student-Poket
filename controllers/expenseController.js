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
    const { name, amount, budgetId, category, date } = req.body;
    const newExpense = new Expense({
      name,
      amount,
      budgetId,
      category,
      // date,
    });

    await newExpense.save();

    res.status(201).json(newExpense);
  } catch (error) {
    console.error('Error creating a new expense', error);
    res.status(500).json({ error: 'An error occurred while creating a new expense' });
  }
};






const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, amount } = req.body;

    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      { name, amount },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json(updatedExpense);
  } catch (error) {
    console.error('Error updating the expense', error);
    res.status(500).json({ error: 'An error occurred while updating the expense' });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Error deleting the expense', error);
    res.status(500).json({ error: 'An error occurred while deleting the expense' });
  }
};

const getFilteredAndSortedExpenses = async (req, res) => {
  try{
    const {budgetId,category,sortBy,sortOrder} = req.query;

    const filter = {};

    if(budgetId) {
      filter.budgetId = budgetId;
    }

    if(category){
      filter.category = category;
    }

    const sort = {};
    if (sortBy && sortOrder) {
      sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
    }

    // Fetch the expenses based on the filter and sort options
    const expenses = await Expense.find(filter).sort(sort);

    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error fetching filtered and sorted expenses', error);
    res.status(500).json({ error: 'An error occurred while fetching expenses' });
  }
  }







module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
  getFilteredAndSortedExpenses;
};
