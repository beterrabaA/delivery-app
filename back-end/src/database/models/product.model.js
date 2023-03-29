/* eslint-disable max-lines-per-function */
const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },

    urlImage: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },

  }, {
    timestamp: false,
    tableName: 'products',
    underscored: true,
  });

  // ProductModel.associate = ({ SalesModel }) => {
  //   SalesModel.belongsTo(SalesModel, {
  //     foreignKey: 'userId',
  //     as: 'users',
  //   });
  // };
  return Product;
};

module.exports = ProductModel;