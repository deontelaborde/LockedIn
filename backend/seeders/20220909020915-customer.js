'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'customers',
      [
        {
          lastName:"Brown",
          firstName: "John",
          phoneNumber: "(123)-456-7890",
          email: "jb@jb.com",
          username: "jbrown",
          password: "123",
          address: "123 Test Ave",
          city: "TestCity",
          stateProvince: "NY",
          country: "United States",
          postalCode: 10550,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('customers', null, {})
  }
}
