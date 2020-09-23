'use strict';
const fs = require('fs')

module.exports = {
    up: (queryInterface, Sequelize) => {
        const dataBook = JSON.parse(fs.readFileSync('./data/book.json', 'utf8'))

        dataBook.forEach(element => {
            element.createdAt = new Date()
            element.updatedAt = new Date()
        });

        return queryInterface.bulkInsert('Books', dataBook, {})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Books', null, {})
    }
};