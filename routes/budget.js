const express = require('express')
const router = express.Router()

const {Budget, NewExpenses} = require('../controllers/budget')


router.route('/budgets').post(Budget)
router.route('/expenses').post(NewExpenses)


module.exports = router;