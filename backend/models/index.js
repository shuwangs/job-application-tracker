import dbConfig from "../config/jobApps.config.js";
import Sequelize from "sequelize";
import jobApps from "./jobApps.model.js";
 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: dbConfig.pool,
    port: dbConfig.PORT,
});
 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = jobApps(sequelize, Sequelize);
 
export default db;