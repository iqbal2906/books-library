'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsToMany(models.Book, { through: models.Borrow })
        }
    };
    User.init({
        username: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: `Username sudah terdaftar`
            },
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: `Username tidak boleh kosong`
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: `Email sudah terdaftar`
            },
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: `Email tidak boleh kosong`
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    args: true,
                    msg: `Password tidak boleh kosong`
                }
            }
        },
        role: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User',
        hooks: {
            beforeCreate: (User, options) => {
                User.role = 2
            }
        },
    });
    return User;
};