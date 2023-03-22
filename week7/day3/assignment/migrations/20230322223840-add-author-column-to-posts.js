'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    queryInterface.addColumn('Posts', 'author', {
      type: Sequelize.STRING,
    })
  },

  async down (queryInterface, Sequelize) {
    
    queryInterface.removeColumn('Posts', 'author')
  }
};
