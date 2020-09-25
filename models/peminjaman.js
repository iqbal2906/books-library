'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Borrow extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Borrow.belongsTo(models.User, { foreignKey: "UserId", targetKey: "id" });
            Borrow.belongsTo(models.Book, { foreignKey: "BookId", targetKey: "id" });
        }
    };
    Borrow.init({
        UserId: DataTypes.INTEGER,
        BookId: DataTypes.INTEGER,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Borrow',
    });
    return Borrow;
};