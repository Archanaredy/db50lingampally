var express = require('express');
const Year_controller=require('../controllers/Year');
var router = express.Router();

/* GET home page. */
router.get('/', Year_controller.Year_view_all_Page); 

module.exports = router;

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// GET request for oneYear. 
router.get('/Year/:id',Year_controller.Year_detail); 

/* GET detail Year page */ 
router.get('/detail', Year_controller.Year_view_one_Page); 
module.exports = router;

/* GET create Year page */ 
router.get('/create', secured,Year_controller.Year_create_Page);

/*GET create update page*/
router.get('/update',secured, Year_controller.Year_update_Page);

/*GET create delete page*/
router.get('/delete', secured,Year_controller.Year_delete_Page);