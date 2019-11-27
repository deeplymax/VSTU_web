const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;
class Task extends Model { }

Task.init({
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    regexp: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    samples: {
        type: Sequelize.JSON
    }
}, {
    sequelize,
    modelName: 'task'
});

module.exports = Task;