// routes/test-routes.js
// Import express
const express = require('express');
// Define the router using the express router
const testRouter = express.Router();
// Import the quotesController
const testController = require('../controllers/test-controller');
// For each route access the correct controller method
// Request all quotes, send it to the / route
testRouter.get('/', testController.findAll);
// Request single quote, send it to the /:id route
testRouter.get('/:id', testController.findById);
// Export the router
module.exports = testRouter;