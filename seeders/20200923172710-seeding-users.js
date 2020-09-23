'use strict';
const fs = require('fs')

module.exports = {
    up: (queryInterface, Sequelize) => {
        const dataAdmin = JSON.parse(fs.readFileSync('./data/admin.json', 'utf8'))

        dataAdmin.forEach(element => {
            element.createdAt = new Date()
            element.updatedAt = new Date()
        });

        return queryInterface.bulkInsert('Users', dataAdmin, {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {})
    }
};