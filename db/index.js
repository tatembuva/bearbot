const {Sequelize} = require('sequelize');

const dbInit = (dialect) => {
  if (dialect == 'sqlite') {
  }
  else if (dialect == 'pg') {
  }
  else {
  }
};


module.exports = {
  init: dbInit,
}
