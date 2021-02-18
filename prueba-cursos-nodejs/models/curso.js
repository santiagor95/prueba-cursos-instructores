'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Curso.init({
    id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    description: DataTypes.STRING,
    urlImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Curso;
};