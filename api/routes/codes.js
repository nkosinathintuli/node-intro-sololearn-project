//code routes 
const express = require('express');
const router = express.Router(); //contains routing functionalities 

//Implementing an API request handlers for codes... using router #GET route
router.get('/', (req, res, next) => 
{
    res.status(200).json({
        message: 'Handling GET request of the /codes'
    });// Handler function 
});

router.post('/', (req, res, next) => 
{
    const code = {
        language: req.body.lang,
        data: req.body.data
    };
    res.status(201).json({
        message: 'Handling POST request of the /codes',
        code: code
    });// Handler function 
});

router.get('/:codeID', (req, res, next) => 
{
    const id = req.params.codeID;
    res.status(200).json({
        message: 'GET a code with Id',
        ID: id
    });// Handler function 
});

router.patch('/:codeID', (req, res, next) => 
{
    const id = req.params.codeID;
    res.status(200).json({
        message: 'Code updated!'
    });// Handler function 
});

router.delete('/:codeID', (req, res, next) => 
{
    const id = req.params.codeID;
    res.status(200).json({
        message: 'Code Deleted!'
    });// Handler function 
});

module.exports = router;