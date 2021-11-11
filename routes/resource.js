var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Year_controller = require('../controllers/Year');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Year ROUTES ///
// POST request for creating a Year.
router.post('/resource/Year', Year_controller.Year_create_post);
// DELETE request to delete Year.
router.delete('/resource/Year/:id', Year_controller.Year_delete);
// PUT request to update Year.
router.put('/resource/Year/:id',
Year_controller.Year_update_put);
// GET request for one Year.
router.get('/resource/Year/:id', Year_controller.Year_detail);
// GET request for list of all Year items.
router.get('/resource/Year', Year_controller.Year_list);

module.exports = router;

