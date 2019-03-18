'use strict';
module.exports = (sequelize, type) => {
  const PersonalDetail = sequelize.define('personal_detail', {
    ID: {
      type : type.STRING,
      primaryKey : true,
      allowNull : false 
    },
    Name: type.STRING,
    Age: type.INTEGER,
    Photo: type.STRING,
    Overall: type.INTEGER,
    Potential: type.INTEGER,
    Value: type.STRING,
    Wage: type.DECIMAL,
    Special: type.INTEGER
  }, {});
  PersonalDetail.associate = function(models) {
    // associations can be defined here
  };
  return PersonalDetail;
};