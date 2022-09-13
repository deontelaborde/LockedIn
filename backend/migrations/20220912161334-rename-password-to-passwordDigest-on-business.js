'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'businesses',
      'password',
      'passwordDigest'
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.renameColumn(
      'businesses',
      'passwordDigest',
      'password'
    )
  }
};
