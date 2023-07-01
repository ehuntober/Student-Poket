// models/budget.js
const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalAmount: { type: Number, required: true },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
