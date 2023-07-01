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

const updateBudget = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, totalAmount } = req.body;

    const updatedBudget = await Budget.findByIdAndUpdate(
      id,
      { name, totalAmount },
      { new: true }
    );

    if (!updatedBudget) {
      return res.status(404).json({ error: 'Budget not found' });
    }

    res.json(updatedBudget);
  } catch (error) {
    console.error('Error updating the budget', error);
    res.status(500).json({ error: 'An error occurred while updating the budget' });
  }
};

const deleteBudget = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBudget = await Budget.findByIdAndDelete(id);

    if (!deletedBudget) {
      return res.status(404).json({ error: 'Budget not found' });
    }

    res.json({ message: 'Budget deleted successfully' });
  } catch (error) {
    console.error('Error deleting the budget', error);
    res.status(500).json({ error: 'An error occurred while deleting the budget' });
  }
};
module.exports = {

  getAllBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
};
