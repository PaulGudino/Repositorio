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
     let arreglo=[ 
      {"nombre":"Usuario1","contraseña":"123456"},
      {"nombre":"Usuario2","contraseña":"123456"},
      {"nombre":"Usuario3","contraseña":"123456"},
     ] ;

     for (var i = arreglo.length - 1; i >= 0; i--) {
       let usuario = arreglo[i]
       await queryInterface.bulkInsert('Usuarios', [{  
             nombre: usuario['nombre'],
             id: i, 
             contraseña: usuario['contraseña'], 
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
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
