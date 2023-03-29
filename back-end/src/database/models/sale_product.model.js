/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
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

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: '_id',
    });
  };

  return SaleProduct;
};
