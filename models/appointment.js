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
      Appointment.belongsTo(models.Business,{foreignKey:'businessId'})

    }
  }
  Appointment.init({
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    reasonForVisit: DataTypes.TEXT,
    customerId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER,
    businessId: {
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