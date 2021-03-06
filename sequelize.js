'use strict';
const Sequelize = require('sequelize');
const PersonalDetail = require('./models/personal_detail');
const Affiliation = require('./models/affiliations');
const Stats = require('./models/stats');
const Traits = require('./models/traits');
const PlayerPlayingPosition = require('./models/player_playing_position');

const sequelize = new Sequelize('fifa_team_selection', 'root', 'root', {
    host : "127.0.0.1",
    dialect : "mysql"
});

const Player = PersonalDetail(sequelize, Sequelize);
const PlayerAffiliations = Affiliation(sequelize, Sequelize);
const PlayerTraits = Traits(sequelize, Sequelize);
const PlayerStats = Stats(sequelize, Sequelize);
const PlayerPlayingPositionData = PlayerPlayingPosition(sequelize, Sequelize);

sequelize.sync()
.then( ()=>{
    console.log(`Personal info and table is created`);
}).catch(err => {
    console.log(`Could not connect to DB - ${err}`);
});

module.exports = {
    Player,
    PlayerAffiliations,
    PlayerStats,
    PlayerTraits,
    PlayerPlayingPositionData
};

