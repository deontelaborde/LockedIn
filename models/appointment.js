'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.Business,{foreignKey:'business_id'});
      Appointment.belongsTo(models.Customer,{foreignKey:'customer_id'});
      Appointment.belongsTo(models.Car,{foreignKey:'car_id'})

    }
  }
  Appointment.init({
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    reasonForVisit: DataTypes.TEXT,
    customer_id: {
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'customers',
        key:'id'
      }
    },
    car_id: {
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'cars',
        key:'id'
      }
    },
    business_id: {
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model:'businesses',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Appointment',
    tableName:'appointments'
  });
  return Appointment;
};