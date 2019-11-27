const Sequelize = require('sequelize');

const sequelize = new Sequelize('webDevelop', 'user_web', '12345', {
    host: 'localhost',
    port: '8889',
    dialect: 'mysql',
});

module.exports = sequelize