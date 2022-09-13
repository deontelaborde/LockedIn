'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'appointments',
      'carId',
      'car_id'
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'appointments',
      'car_id',
      'carId'
    )
  }
};
