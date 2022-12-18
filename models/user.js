'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: DataTypes.INTEGER,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    credit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return user;
};