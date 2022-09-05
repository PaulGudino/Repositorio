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
     for (let i = 1; i <6; i++) {  
      await queryInterface.bulkInsert('Categoria', [{  
          nombre: 'Categoria'+i,  
          id: i, 
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
   } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Categoria', null, {});
  }
};
