import express from 'express';
import morgan from 'morgan';
import tourRouter from './routes/tourRoutes';
import UserRouter from './routes/userRoutes';

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', UserRouter);

module.exports = app;
