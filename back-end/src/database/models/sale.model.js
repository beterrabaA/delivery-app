/* eslint-disable max-lines-per-function */
const SalesModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },

    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },

    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },

    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    timestamp: false,
    tableName: 'sales',
    underscored: true,
  });

  SalesModel.associate = ({ UserModel }) => {
    SalesModel.belongsTo(UserModel, {
      foreignKey: 'userId',
      as: 'users',
    });
    SalesModel.belongsTo(UserModel, {
      foreignKey: 'sellerId',
      as: 'users',
    });
  };

  return Sale;
};

module.exports = SalesModel;