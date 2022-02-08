'use strict';
const {
  Model
} = require('sequelize');
const movie = require('./movie');
module.exports = (sequelize, DataTypes) => {
  class Gender extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsTo(models.Gender, {
        foreignKey: 'genderID',
        onDelete: 'set NULL'
      })
    }
  }
  Gender.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gender',
  });
  return Gender;
};