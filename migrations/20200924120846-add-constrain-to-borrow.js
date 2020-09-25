'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addConstraint("Borrows", {
                fields: ["BookId"],
                type: "foreign key",
                name: "custom_fkey_constraint_bookid",
                references: {
                    table: "Books",
                    field: "id"
                },
                onDelete: "cascade",
                onUpdate: "cascade"
            })
            .then(() => {
                return queryInterface.addConstraint("Borrows", {
                    fields: ["UserId"],
                    type: "foreign key",
                    name: "custom_fkey_constraint_userid",
                    references: {
                        table: "Users",
                        field: "id"
                    },
                    onDelete: "cascade",
                    onUpdate: "cascade"
                })
            });
    },

    down: (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.removeConstraint("Borrows", "custom_fkey_constraint_bookid", {})
            .then(() => {
                return queryInterface.removeConstraint("Borrows", "custom_fkey_constraint_userid", {})
            })
    }
};