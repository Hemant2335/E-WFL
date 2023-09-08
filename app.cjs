const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const stateroutes = require('./Routes/stateroutes.cjs');

const app = express();

// Define a rate limiter with a maximum of 100 requests per hour
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour in milliseconds
  max: 100, // Max requests per window
  message: 'Too many requests from this IP, please try again in an hour.',
});

// Apply the rate limiter to the '/ewaste' route
app.use('/ewaste', limiter);

// Enable CORS with specific options
const corsOptions = {
  origin: '*', // Replace with your allowed origin(s)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/ewaste', stateroutes);

// Export the Express.js app
module.exports = app;
