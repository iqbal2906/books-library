'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addColumn('Books', 'AuthorId', {
            type: Sequelize.INTEGER,
            references: {
                model: 'Authors',
                key: 'id'
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.removeColumn('Books', 'AuthorId')
    }
};