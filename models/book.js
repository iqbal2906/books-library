'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Book.belongsToMany(models.User, { through: models.Borrow })
        }
    };
    Book.init({
        judul: DataTypes.STRING,
        penulis: DataTypes.STRING,
        tahunTerbit: DataTypes.INTEGER,
        jumlahBuku: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Book',
    });
    return Book;
};