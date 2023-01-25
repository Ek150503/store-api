require('dotenv').config();
const connect = require('./db/connect');

const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
  try {
    await connect(process.env.URI_MONGODB);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Success');
    process.exit(0);
  } catch (error) {
    console.log('Server error: ' + error);
    process.exit(1);
  }
};

start();
