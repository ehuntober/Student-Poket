const {Budget,Expense} = require('../models/budget')

const Budget = async(req,res) =>{
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
      }
    


module.export ={
    Budget,

}