'use strict';
const {Player, PlayerAffiliations, PlayerStats, PlayerTraits} = require('../sequelize');
module.exports = (app) => {

    app.get('/api/getClubPlayerList/:clubName', (req,res) => {
        
        const clubName = req.params.clubName;

        // Fetch playerId from Affiliation table
        PlayerAffiliations.findAll({

            attributes: ['ID'],
            where : {
                Club : clubName
            }
        })
            .then(playerId => {
                console.log(`Player ID found ${playerId}`);
            })

            .catch(err => {
                console.log(`Problem while querying Affiliation table`);
            });


    });
}