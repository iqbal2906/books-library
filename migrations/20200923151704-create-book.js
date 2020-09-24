'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Books', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            judul: {
                allowNull: false,
                type: Sequelize.STRING
            },
            penulis: {
                allowNull: false,
                type: Sequelize.STRING
            },
            tahunTerbit: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            jumlahBuku: {
                allowNull: false,
                type: Sequelize.INTEGER
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Books');
    }
};