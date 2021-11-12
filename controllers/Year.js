var Year = require('../models/Year'); 
 
// List of all Year 
exports.Year_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year list'); 
}; 
 
// for a specific Year. 
exports.Year_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year detail: ' + req.params.id); 
}; 
 
// Handle Year create on POST. 
exports.Year_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Year();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Day = req.body.Day;
    document.Week = req.body.Week;
    document.Month = req.body.Month;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
// Handle Year delete form on DELETE. 
exports.Year_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Year delete DELETE ' + req.params.id); 
}; 
 
// Handle Year update form on PUT. 
exports.Year_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Year.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Day) toUpdate.Day = req.body.Day; 
        if(req.body.Week) toUpdate.Week = req.body.Week; 
        if(req.body.Month) toUpdate.Month = req.body.Month; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// List of all Years 
exports.Year_list = async function(req, res) { 
    try{ 
        theYear = await Year.find(); 
        res.send(theYear); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// for a specific Year. 
exports.Year_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Year.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 



