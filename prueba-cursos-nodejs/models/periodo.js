'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Periodo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // console.log('models ', models.Cursos);
      // this.hasOne(models.Instructores, { foreignKey: 'idCourse', sourceKey: 'id' })
      this.hasOne(models.Instructores, { foreignKey: 'id', sourceKey: 'idInstructor', as: 'Instructor' })
    }
  };
  Periodo.init({
    id: {
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    idCourse: DataTypes.NUMBER,
    idInstructor: DataTypes.NUMBER,
    from: DataTypes.DATE,
    to: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Periodos',
  });
  return Periodo;
};