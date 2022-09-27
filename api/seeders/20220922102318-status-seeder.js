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
    queryInterface.bu 

    await queryInterface.bulkInsert('Statuses', [
      {
        id: 1,
        description: 'Do!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        description: "Doin'...",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        description: 'Done!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {
      upsertKeys: ['id'],
      updateOnDuplicate: ['description']
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statuses', null, {});
  }
};
