const fs = require('fs');
const mongoose = require('mongoose');
const States = require('./models/facilitymodel.cjs');

// Provide your MongoDB Atlas connection string here
const DB = 'mongodb+srv://Vansh:12345678Rt.@cluster0.j5sgoz0.mongodb.net/';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.error('DB connection failed!', err)); // Handle connection errors

// READ JSON FILE

// Read the JSON file
const rawData = fs.readFileSync(`${__dirname}/ok.json`, 'utf-8');
const states = JSON.parse(rawData);

// Clean and format the data
states.forEach((state) => {
  state.data.forEach((item) => {
    if (typeof item.Installed_Capacity_Metric_Tons_per_Annum_MTA === 'string') {
      item.Installed_Capacity_Metric_Tons_per_Annum_MTA = parseFloat(item.Installed_Capacity_Metric_Tons_per_Annum_MTA.replace(/\s/g, ''));
  };
})
});

// Now jsonData contains cleaned data ready for import

// ... Import the cleaned data into MongoDB


// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await States.create(states);
    console.log('Data successfully loaded!');
    console.log(state);
  } catch (err) {
    console.error('Data import failed:', err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await States.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.error('Data deletion failed:', err);
  }
  process.exit();
};

// Check for the command line argument
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log('Usage: node script.js --import (to import data) or --delete (to delete data)');
}
