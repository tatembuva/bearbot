const {Sequelize, DataTypes} = require('sequelize');

const getModelInstance = async (sqlz) => {
  let State = sqlz.define('State', {
    username: {
      type: DataTypes.STRING
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    lastState: {
      type: DataTypes.STRING
    }
  }, {
    //Options
  });
  return State
}

module.exports = {
  getModelInstance,
};
