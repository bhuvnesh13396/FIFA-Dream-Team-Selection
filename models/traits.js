'use strict';

// Traits model that defines various traits of any player

module.exports = (sequelize, type) => {
  const Traits = sequelize.define('traits', {
    ID: {
      type : type.STRING,
      primaryKey : true,
      allowNull : false 
    },

    Acceleration : type.INTEGER,
    Aggression : type.INTEGER,
    Agility : type.INTEGER,
    Balance : type.INTEGER,
    BallControl : type.INTEGER,
    Composure : type.INTEGER,
    Crossing : type.INTEGER,
    Curve : type.INTEGER,
    Dribbling : type.INTEGER,
    Finishing : type.INTEGER,
    Positioning : type.INTEGER,
    Reactions : type.INTEGER
  }, {});

  Traits.associate = function(models) {
    // associations can be defined here
  };
  return Traits;
};