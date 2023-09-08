const express = require('express');
const statecontroller = require('./../controllers/statecontroller.cjs');
const router = express.Router();

// Define a GET route for retrieving state-specific data
router.get('/:state', statecontroller.getStatePlants);

// Define a GET route for retrieving city-specific data within a state
router.get('/:state/city/:city', statecontroller.getCityPlants);

module.exports = router;

