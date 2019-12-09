'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { STRING, INTEGER, DATE, CHAR, DECIMAL, TEXT, BIGINT } = Sequelize;
    return  queryInterface.createTable('wshop_attribution', {
          id: {
            type: INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          category_id: {
            type: INTEGER(8),
            allowNull: true
          },
          attr_name: {
            type: STRING(90),
            allowNull: false,
          },
          attr_id: {
            type: STRING(255),
            allowNull: false
          },
          attr_value: {
            type: TEXT,
            allowNull: false
          }
    })

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('wshop_attribution');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
