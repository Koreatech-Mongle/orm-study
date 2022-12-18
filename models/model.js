'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        model.belongsTo(models.category, {foreignKey:'categoryId', targetKey:'id'})
        model.belongsTo(models.user, {foreignKey:'authorId', targetKey:'id'})
    }
  }
  model.init({
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      inputType: DataTypes.STRING,
      outputType: DataTypes.STRING,
      authorId: DataTypes.INTEGER, //userId 외래키?
      usagePrice: DataTypes.INTEGER,
      sellingPrice: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER//categoryId 외래키
  }, {
      sequelize,
      modelName: 'model',
      charset: 'utf8',
      collate: 'utf8_general_ci'
  });
  return model;
};