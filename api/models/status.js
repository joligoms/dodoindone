'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static Do = 1;
    static Doin = 2;
    static Done = 3;

    static associate({ Status, Task}) {
      Status.hasMany(Task);
    }
  }
  Status.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};