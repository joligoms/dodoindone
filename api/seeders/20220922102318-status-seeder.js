'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Statuses', [
    {
      description: 'Do!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: "Doin'...",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'Done!',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
