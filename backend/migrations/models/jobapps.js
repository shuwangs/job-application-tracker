'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobApps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jobApps.init({
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    dateApplied: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jobApps',
  });
  return jobApps;
};