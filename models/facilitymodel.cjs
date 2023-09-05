const mongoose = require('mongoose');

// Define a schema for the data within each state
const dataSchema = new mongoose.Schema({
  Sno: Number,
  Name_Address: String,
  Installed_Capacity_Metric_Tons_per_Annum_MTA: Number
});

// Define a schema for the state
const stateSchema = new mongoose.Schema({
  name: String,
  data: [dataSchema]
});

// Create a model for the state
const State = mongoose.model('State', stateSchema);

module.exports = State;


