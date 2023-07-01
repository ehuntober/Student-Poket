const { Budget, Expense } = require('../models/budget');

const createBudget = async (req, res) => {
  try {
    const { name, totalAmount } = req.body;
    const newBudget = new Budget({
      name,
      totalAmount,
      userId: req.user.id,
    });

    await newBudget.save();

    res.status(201).json(newBudget);
  } catch (error) {
    console.error('Error creating a new budget', error);
    res.status(500).json({ error: 'An error occurred while creating a new budget' });
  }
};




const createExpense = async(req,res) =>{
    try {
        const { description, amount, budgetId } = req.body;
    
        const newExpense = new Expense({
          description,
          amount,
          budgetId,
        });
    
        await newExpense.save();
    
        res.status(201).json(newExpense);
      } catch (error) {
        console.error('Error creating a new expense', error);
        res.status(500).json({ error: 'An error occurred while creating a new expense' });
      }
    

}

module.exports = {
    createBudget,
    createExpense
  };