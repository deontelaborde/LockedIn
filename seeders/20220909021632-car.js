'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'cars',
      [
        {
          make: "BMW",
          model: "335i",
          color: "Black",
          year: 2008,
          customerId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cars', null, {})
  }
}
