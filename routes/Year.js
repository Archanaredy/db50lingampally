var express = require('express');
const Year_controller=require('../controllers/Year');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Year', { title: 'Search Result : Year' });
});

module.exports = router;

// GET request for oneYear. 
router.get('/Year/:id',Year_controller.Year_detail); 
