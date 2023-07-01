const mongoose = require('mongoose');

const  budgetSchema = new mongoose.Schma({
    name: {
        type: String,
        required: true
    },
    totalAmount:{
        type: Number,
        required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true },

})

const Budget = mongoose.model('Budget',budgetSchema)


const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true
    },
    budgetId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Budget', 
        required: true },

})

const Expense = mongoose.model('Expense', expenseSchema);






























