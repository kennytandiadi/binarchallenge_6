'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_login.init({
    login_user: DataTypes.STRING,
    login_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_login',
  });
  return data_login;
};