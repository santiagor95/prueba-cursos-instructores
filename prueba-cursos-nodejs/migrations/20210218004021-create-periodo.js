'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Periodos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCourse: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Cursos",
          key: "id"
        },
      },
      idInstructor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Instructores",
          key: "id"
        },
      },
      from: {
        allowNull: false,
        type: Sequelize.DATE
      },
      to: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Periodos');
  }
};