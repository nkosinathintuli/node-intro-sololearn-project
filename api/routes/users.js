//user routes 
const express = require('express');
const router = express.Router(); //contains routing functionalities 

//Implementing an API request handlers for user resource.... using router #GET route
router.get('/', (req, res, next) => 
{
    res.status(200).json({
        message: 'Handling GET request of the /users'
    });// Handler function 
});

//GET user by ID 
router.get('/:userID', (req, res, next) =>
{
    const id = req.params.userID; //userID is a placeholder for request parameter variable (indicated by colon :)
    if (id==='admin'){
        res.status(200).json({
            message: 'You are the Admin!', 
            ID: id
        });
    } else {
        res.status(200).json({
            message: 'You are a standard user',
            ID: id
        });
    }
});

//POST request handler 
router.post('/', (req, res, next) =>
{
    const user = {
        name: req.body.name,
        age: req.body.age
    };
    res.status(201).json({
        message: 'Handling POST request of the /users',
        user: user
    });
});

//PATCH request #PATCH method 
//PATCH request method applies partial modifications to a resource 
//The HTTP PUT method only allows complete placement of a document
router.patch('/:userID', (req, res, next) =>
{
    const id = req.params.userID; // find and update user by id
    res.status(200).json({
        message: 'User updated!'
    });
});

//DELETE method
router.delete('/:userID', (req, res, next)=>
{
    const id = req.params.userID;
    res.status(200).json({
        message: 'User Deleted!'
    });
});

module.exports = router;
