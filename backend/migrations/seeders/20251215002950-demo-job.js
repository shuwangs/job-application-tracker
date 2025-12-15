'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     /** Add seed commands here.*/ 
    return queryInterface.bulkInsert('Jobs', [
      {
        company: 'Microsoft',
        position: 'SWE',
        dateApplied: new Date(),
        status: "applied",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Jobs', null, {});
     
  },
};
