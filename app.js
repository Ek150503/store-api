require('dotenv').config();

const express = require('express');
const app = express();

require('express-async-errors');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.json());

//connect DB
const connect = require('./db/connect');
const PORT = process.env.PORT || 3001;
const URI_MONGODB = process.env.URI_MONGODB;

// Routes
const productRouter = require('./routes/products');

app.get('/', (req, res) => {
  res.send(`
  <h1>Store API</h1>
  <a href='/api/v1/products'>Product Route</a>
  `);
});

//routes
app.use('/api/v1/products', productRouter);

// errors
app.use(errorMiddleware);
app.use(notFoundMiddleware);

const start = async () => {
  try {
    await connect(URI_MONGODB);
    app.listen(PORT, () => {
      console.log('Server is running on PORT: ' + PORT);
    });
  } catch (error) {
    console.log('Server error: ' + error);
  }
};

start();
