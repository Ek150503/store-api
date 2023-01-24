const getAllProductsStatic = async (req, res) => {
  res.status(200).json({
    smg: 'Product testing route',
  });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({
    smg: 'Product route',
  });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
