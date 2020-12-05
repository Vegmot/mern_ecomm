import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

// to use environment file
dotenv.config();

// connect to MongoDB
connectDB();

const app = express();

// initializing middleware
app.use(express.json()); // allows us to use bodyparser

app.get('/', (req, res) => {
  res.send('API is running...');
});

// defining routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// initializing middleware
// handling 404 error
app.use(notFound);
// custom error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}...`.yellow.bold
  )
);
