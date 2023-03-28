/* eslint-disable max-lines-per-function */
const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
  }, {
    timestamp: false,
    tableName: 'users',
    underscored: true,
  });

  UserModel.associate = ({ SalesModel }) => {
    UserModel.hasMany(SalesModel, {
      foreignKey: 'userId',
      as: 'sales',
    }, {
      foreignKey: 'sellerId',
      as: 'sales',
    });
  };

  return User;
};

module.exports = UserModel;