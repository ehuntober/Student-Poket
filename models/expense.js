// models/expense.js
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  budgetId: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Budget', 
    required: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ExpenseCategory',
      // required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },

    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: null }


});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;

