


const express = require('express');
const router = express.Router();
const { createBudget,createExpense } = require('../controllers/budget');

router.route('/budgets').post(createBudget);
router.route('/expenses').post(createExpense);

module.exports = router;

