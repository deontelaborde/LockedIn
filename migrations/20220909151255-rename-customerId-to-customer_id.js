'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn('cars', 'customerId', 'customer_id')
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn('cars', 'customer_id', 'customerId')
  }
};
