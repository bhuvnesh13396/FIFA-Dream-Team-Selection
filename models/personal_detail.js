'use strict';
 const Affiliation = require('./affiliations');
module.exports =  (sequelize, type) => {
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
  });

  console.log('Log Message ',typeof(PersonalDetail));
  PersonalDetail.associate = function(models) {
    // associations can be defined here
    // console.log('Affiliations ',typeof(models.Affiliation));
    // models.PersonalDetail.belongsTo(models.Affiliation);
  };

  // PersonalDetail.belongsTo(Affiliation, { foreignKey:'ID' })
  return PersonalDetail;
};