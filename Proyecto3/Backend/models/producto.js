'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      producto.belongsTo(models.categoria, {
        foreignKey: 'id',
        targetKey: 'id',
      });
    }
  }
  producto.init({
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING,
    id_categoria: DataTypes.INTEGER,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};