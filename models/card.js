'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models)
      card.belongsTo(models.user, {foreignKey:'ownerId', targetKey:'id'})
    }
  }
  card.init({
    id: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER, // userId 외래키
    numbers: DataTypes.STRING,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    cvc: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'card',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return card;
};