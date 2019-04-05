'use strict';

module.exports =  (sequelize, type) => {
  const PlayerPlayingPosition = sequelize.define('player_playing_position', {
    ID: {
      type : type.STRING,
      allowNull : false 
    },
    CAM: type.INTEGER,
    CB: type.INTEGER,
    CDM: type.INTEGER,
    CF: type.INTEGER,
    CM: type.INTEGER,
    LAM: type.INTEGER,
    LB: type.INTEGER,
    LCB: type.INTEGER,
    LCM: type.INTEGER,
    LDM: type.INTEGER,
    LF: type.INTEGER,
    LM: type.INTEGER,
    LS: type.INTEGER,
    LW: type.INTEGER,
    LWB: type.INTEGER,
    PreferredPosition : type.String,
    RAM: type.INTEGER,
    RB: type.INTEGER,
    RCB: type.INTEGER,
    RCM: type.INTEGER,
    RDM: type.INTEGER,
    RF: type.INTEGER,
    RM: type.INTEGER,
    RS: type.INTEGER,
    RW: type.INTEGER,
    RWB: type.INTEGER,
    ST: type.INTEGER,
  });

  
  PlayerPlayingPosition.associate = function(models) {
    // associations can be defined here
   
  };

  return PlayerPlayingPosition;
};