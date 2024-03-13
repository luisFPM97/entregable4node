const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const User = require('./User');

const EmailCode = sequelize.define('emailCode', {
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

EmailCode.belongsTo(User);
User.hasOne(EmailCode, { foreignKey: "userId"});

module.exports = EmailCode;