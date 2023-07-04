// models/budget.js
const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  remainingAmount: { type: Number, default: 0 },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
