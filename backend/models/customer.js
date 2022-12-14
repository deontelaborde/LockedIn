'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.hasMany(models.Appointment,{foreignKey:'customer_id'});
      Customer.hasMany(models.Car,{foreignKey:'customer_id'})
      
    }
  }
  Customer.init({
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    stateProvince: DataTypes.STRING,
    country: DataTypes.STRING,
    postalCode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return Customer;
};