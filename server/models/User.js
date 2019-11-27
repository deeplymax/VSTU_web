const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;
class User extends Model { }

User.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;