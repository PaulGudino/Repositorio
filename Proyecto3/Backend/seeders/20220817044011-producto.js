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
      {"nombre":"Producto1","marca":"Marca1","categoria":1,"imagen":"https://www.bpecuador.com/wp-content/uploads/2021/04/BP00483.png"},
      {"nombre":"Producto2","marca":"Marca2","categoria":2,"imagen":"https://pinturasunidas.com/wp-content/uploads/2021/08/1-Latex-Supremo-Bioshield.jpg"},
      {"nombre":"Producto3","marca":"Marca3","categoria":3,"imagen":"https://multimedia.3m.com/mws/media/794048P/3mtm-hard-hat-white-4-point-ratchet-suspension-h-701r.jpg"},
      {"nombre":"Producto4","marca":"Marca4","categoria":4,"imagen":"https://kywitiendaenlinea.com/wp-content/uploads/2020/05/529745.jpg"},
      {"nombre":"Producto5","marca":"Marca5","categoria":5,"imagen":"https://kywitiendaenlinea.com/wp-content/uploads/2020/10/27081.jpg"},
      {"nombre":"Producto6","marca":"Marca2","categoria":1,"imagen":"https://kywitiendaenlinea.com/wp-content/uploads/2020/08/600309.jpg"},
      {"nombre":"Producto7","marca":"Marca3","categoria":2,"imagen":"https://ferreteriavasquezbrito.com/wp-content/uploads/2020/06/CEM.HOL_.00001.jpg"},
      {"nombre":"Producto8","marca":"Marca4","categoria":3,"imagen":"https://pycca.vteximg.com.br/arquivos/ids/200907-600-600/O11126-2.jpg?v=637579815852100000"},
      {"nombre":"Producto9","marca":"Marca5","categoria":4,"imagen":"https://www.demaquinasyherramientas.com/wp-content/uploads/2018/03/Destornillador.jpg"},
      {"nombre":"Producto10","marca":"Marca1","categoria":5,"imagen":"https://abmedicagroup.com/wp-content/uploads/2020/07/1587500189243.jpg"},
    ];
   
    for (var i = arreglo.length - 1; i >= 0; i--) {
      let producto = arreglo[i]
      await queryInterface.bulkInsert('Productos', [{  
            nombre: producto['nombre'],
            id: i, 
            marca: producto['marca'], 
            id_categoria: producto['categoria'],
            imagen: producto['imagen'],
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
     await queryInterface.bulkDelete('Productos', null, {});  
  }
};
