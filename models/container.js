'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class container extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      container.belongsTo(models.model, {foreignKey:'modelId', targetKey:'id'})
      container.belongsTo(models.user, {foreignKey:'executorId', targetKey:'id'})
    }
  }
  container.init({
    id: DataTypes.INTEGER,
    modelId: DataTypes.INTEGER, //modelId 외래키
    executorId: DataTypes.INTEGER, //userId 외래키
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    paid: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'container',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return container;
};