/* eslint-disable max-lines-per-function */
const SaleProductModel = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('Product', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      allowNull: false,
    },

    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  }, {
    timestamp: false,
    tableName: 'sales_products',
    underscored: true,
  });
  SaleProduct.associate = ({ ProductModel, SalesModel }) => {
    SalesModel.belongsToMany(ProductModel, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    ProductModel.belongsToMany(SalesModel, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };
  return SaleProduct;
};

module.exports = SaleProductModel;