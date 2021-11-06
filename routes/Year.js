var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Year', { title: 'Search Result : Year' });
});

module.exports = router;
