'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Business.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    stateProvince: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Business',
    tableName: 'businesses'
  });
  return Business;
};