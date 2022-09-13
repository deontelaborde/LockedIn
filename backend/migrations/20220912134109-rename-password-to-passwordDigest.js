'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'customers',
      'password',
      'passwordDigest'
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'customers',
      'passwordDigest',
      'password'
    )
  }
};
