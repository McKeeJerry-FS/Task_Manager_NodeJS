const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

router.route('/').get((req, res) => {
  res.send('all tasks');
});


module.exports = router;