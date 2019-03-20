'use strict';
const PersonalDetail = require('./personal_detail');
module.exports = (sequelize, type) => {
  const Affiliation = sequelize.define('affiliation', {
    ID: {
      type : type.STRING,
      primaryKey : true,
      allowNull : false 
    },

    Nationality : type.STRING,
    Flag : type.STRING,
    Club : type.STRING,
    ClubLogo : type.STRING

  }, {});

//   Affiliation.belongsTo(PersonalDetail);
console.log(typeof(Affiliation));
  Affiliation.associate = function(models) {
    // associations can be defined here
    
    // Add ID of Personal Detail to Affiliation model
    // to fetch details of player's affiliations
    // PersonalDetail.hasOne(Affiliation, {foreignKey : 'ID'});
    
    
  };
  return Affiliation;
};