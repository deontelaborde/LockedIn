'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'appointments',
      'businessId',
      'business_id'
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'appointments',
      'business_id',
      'businessId'
    )
  }
};
