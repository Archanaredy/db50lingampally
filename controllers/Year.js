var Year = require('../models/Year'); 
 
// List of all Years 
exports.Year_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year list'); 
}; 
 
// for a specific Year. 
exports.Year_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year detail: ' + req.params.id); 
}; 
 
// Handle Year create on POST. 
exports.Year_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year create POST'); 
}; 
 
// Handle Year delete form on DELETE. 
exports.Year_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year delete DELETE ' + req.params.id); 
}; 
 
// Handle Year update form on PUT. 
exports.Year_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year update PUT' + req.params.id); 
}; 