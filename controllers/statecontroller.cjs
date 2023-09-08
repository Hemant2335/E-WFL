const express = require('express');
const model = require('./../models/facilitymodel.cjs');
const slugify = require('slugify'); // Import slugify
exports.getStatePlants = async (req, res, next) => {
  try {
    const stateSlug = slugify(req.params.state); // Generate state slug

    const plants = await model.find({ name: stateSlug }); // Use the slug for the query

    if (!plants || plants.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'No data found for the specified state',
      });
    }

    res.status(200).json({
      status: 'success',
      data: plants,
    });
  } catch (err) {
    console.error('Error:', err);
    next(err);
  }
};

exports.getCityPlants = async (req, res, next) => {
  try {
    const stateSlug = slugify(req.params.state); // Generate state slug
    const citySlug = slugify(req.params.city); // Generate city slug

    const plants = await model.find({ name: stateSlug });

    if (!plants || plants.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'No data found for the specified state',
      });
    }

    const cityData = plants[0].data.find((city) =>
      slugify(city.Name_Address, { lower: true }) === citySlug
    );

    if (!cityData) {
      return res.status(404).json({
        status: 'error',
        message: 'City not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: cityData,
    });
  } catch (err) {
    console.error('Error:', err);
    next(err);
  }
};

exports.getCityPlants = async (req, res, next) => {
  const state = req.params.state;
  const city = req.params.city;

  try {
    const stateData = await model.findOne({ name: state });

    if (!stateData || !stateData.data || stateData.data.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'State not found',
      });
    }

    // Filter the data to include only records with matching city names
    const filteredData = stateData.data.filter((item) =>
      item.Name_Address.toLowerCase().includes(city.toLowerCase())
    );

    if (!filteredData || filteredData.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'City not found in the specified state',
      });
    }

    res.status(200).json({
      status: 'success',
      data: filteredData,
    });
  } catch (err) {
    next(err);
  }
};


