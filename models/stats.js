'use strict';

// Stats model that defines statistics of football players 

module.exports = (sequelize, type) => {
  const Stats = sequelize.define('stats', {
    ID: {
      type : type.STRING,
      primaryKey : true,
      allowNull : false 
    },
    FreeKickAccuracy : type.INTEGER,
    GKDiving : type.INTEGER,
    GKHandling : type.INTEGER,
    GKKicking : type.INTEGER,
    GKPositioning : type.INTEGER,
    GKReflexes : type.INTEGER,
    HeadingAccuracy : type.INTEGER,
    Intercetions : type.INTEGER,
    Jumping : type.INTEGER,
    LongPassing : type.INTEGER,
    LongShots : type.INTEGER,
    Marking : type.INTEGER,
    Penalties : type.INTEGER,
    ShortPassing : type.INTEGER,
    SlidingTackle : type.INTEGER,
    SprintSpeed : type.INTEGER,
    Stamina : type.INTEGER,
    StandingTackle : type.INTEGER,
    Strength : type.INTEGER,
    Vision : type.INTEGER,
    Volleys : type.INTEGER

  }, {});


  Stats.associate = function(models) {
    // associations can be defined here    
  };
  return Stats;
};