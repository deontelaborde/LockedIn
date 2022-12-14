'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.Customer,{foreignKey:'customer_id'});
      Car.hasMany(models.Appointment,{foreignKey:'car_id'})
      
    }
  }
  Car.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    year: DataTypes.INTEGER,
    customer_id: {
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'customers',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Car',
    tableName:'cars'
  });
  return Car;
};