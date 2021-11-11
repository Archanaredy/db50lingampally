var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Year_controller = require('../controllers/Year'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Year ROUTES /// 
 
// POST request for creating a Year.  
router.post('/Years', Year_controller.Year_create_post); 
 
// DELETE request to delete Year. 
router.delete('/Years/:id', Year_controller.Year_delete); 
 
// PUT request to update Year. 
router.put('/Years/:id', 
Year_controller.Year_update_put); 
 
// GET request for one Year. 
router.get('/Years/:id', Year_controller.Year_detail); 
 
// GET request for list of all Year items. 
router.get('/Years', Year_controller.Year_list); 
 
module.exports = router; 