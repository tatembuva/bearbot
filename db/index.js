const {Sequelize, DataTypes} = require('sequelize');
const path = require('path');
const chalk = require('chalk');
//Models
const createUser = require('./models/User').getModelInstance;
let User;
const createState = require('./models/State').getModelInstance;
let State;


const defineModels = async (sqlz) => {
  User = await createUser(sqlz);
  State = await createState(sqlz);

  await syncModels(sqlz);
}

const syncModels = async (sqlz) => {
  await sqlz.sync({
    force: true,
  })
  console.log("🤖 DB Models defined and synced...");
}

let sqlz;
const dbInit = async () => {
  let dialect = process.env.DB_DIALECT;
  console.log("🤖 Initializing database...");
  console.log("🤖 DB Dialect : " + dialect);

  if (dialect == 'sqlite') {

    sqlz = new Sequelize({
      dialect: 'sqlite',
      storage: path.join(__dirname, process.env.SQLITE_PATH),
      dialectOptions: {
        logging: false,
      },
    });

    try {
      sqlz.options.logging = false;
      await sqlz.authenticate();
      console.log('✅ DB connection established');
      console.log('DB File Path : ' + chalk.blue(path.join(path.join(__dirname, process.env.SQLITE_PATH))) + "\n");

      // Register Models
      await defineModels(sqlz);
      // Create user and initial state
      await seedDB();

      // db object with sqlz and all models
      let db = {
        sqlz: sqlz,
        models: {
          User: User,
          AppState: State,
        }

      };
      return db;
    } catch (error) {
      console.error('🚫 Unable to connect to the database :', error);
    }
  }
  else if (dialect == 'pg') {
  }
  else {
  }
};
// Admin User
// Bot Owner
const seedDB = async () => {
  let adminExists = await User.findOne({where: {username: process.env.USERNAME}});
  console.log("AdminExists : " + adminExists);
  if (adminExists == null) {
    let admin = await User.create({
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    })
    console.log("👤 New admin account created...");
  } else {
    console.log(adminExists)
    console.log("👋 " + chalk.bold("Welome back, " + process.env.USERNAME));
  }
  let stateExists = await State.findOne({where: {username: process.env.USERNAME}});
  console.log("StateExists : " + stateExists);
  if (stateExists == null) {
    let newState = await User.create({
      username: process.env.USERNAME,
    })
    console.log("⏱  New app state created...");
  } else {
    console.log(stateExists)
    console.log("👋 " + chalk.bold("Welome back, " + process.env.USERNAME));
  }
}

const returnInstance = () => {

}
module.exports = {
  init: dbInit,
  returnInstance,
}
