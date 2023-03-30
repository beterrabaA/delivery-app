/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
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
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sale.associate = ({ User }) => {
    Sale.belongsTo(User, {
      foreignKey: 'userId',
      as: 'users',
    });
    Sale.belongsTo(User, {
      foreignKey: 'sellerId',
      as: 'sellers',
    });
  };

  return Sale;
};
