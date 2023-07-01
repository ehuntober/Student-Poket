// controllers/budgetController.js
const Budget = require('../models/budget');

const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (error) {
    console.error('Error fetching budgets', error);
    res.status(500).json({ error: 'An error occurred while fetching budgets' });
  }
};

const createBudget = async (req, res) => {
  try {
    const { name, totalAmount } = req.body;
    const newBudget = new Budget({
      name,
      totalAmount,
    });

    await newBudget.save();

    res.status(201).json(newBudget);
  } catch (error) {
    console.error('Error creating a new budget', error);
    res.status(500).json({ error: 'An error occurred while creating a new budget' });
  }
};

module.exports = {
  getAllBudgets,
  createBudget,
};
