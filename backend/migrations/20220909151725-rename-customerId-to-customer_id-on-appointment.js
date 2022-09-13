'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'appointments',
      'customerId',
      'customer_id'
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'appointments',
      'customer_id',
      'customerId'
    )
  }
}
