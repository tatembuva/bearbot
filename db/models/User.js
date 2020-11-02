const {Sequelize, DataTypes} = require('sequelize');

const getModelInstance = async (sqlz) => {
  let User = sqlz.define('User', {
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    lastLogin: {
      type: DataTypes.DATE
    }
  }, {
    // Other model options go here
  });
  return User;
}

module.exports = {
  getModelInstance,
};
