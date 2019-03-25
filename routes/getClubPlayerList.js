'use strict';
const {Player, PlayerAffiliations, PlayerStats, PlayerTraits} = require('../sequelize');
module.exports = (app) => {

    app.get('/api/getClubPlayerList/:clubName', (req,res) => {
        
        const clubName = req.params.clubName;

        // Fetch all the playerIds playing for same club
        // from Affiliation table
        PlayerAffiliations.findAll({

            attributes: ['ID'],
            where : {
                Club : clubName
            }
        })
            .then(playerIds => {
                console.log(`Player IDs found ${playerIds}`);

                Player.findAll({
                    include : [{
                        model : [PlayerAffiliations, PlayerStats, PlayerTraits] ,
                        required : true,
                        where : { ID : playerIds }
                    }]
                })
                    .then(allClubPlayerList => {
                        console.log(`List of all club players ${allClubPlayerList}`);
                        res.status(200).json(allClubPlayerList);
                    });

                // // Query player's affilations table
                // let playerAffiliations = PlayerAffiliations.findAll({
                //     where : {
                //         ID : playerIds
                //     }
                // });

                // // Query Player's personal detail table
                // let personalDetails = Player.findAll({
                //     where : {
                //         ID : playerIds
                //     }
                // });
                    
                // // Query player's stats table
                // let playerStats = PlayerStats.findAll({
                //     where : {
                //         ID : playerIds
                //     }
                // });
                       

                // // Query player's traits table
                // let playerTraits = PlayerTraits.findAll({
                //     where : {
                //         ID : playerIds
                //     }
                // });
                    
                // // Return response after quering all the 
                // // tables(affiliation, stats, trait)
                // Promise.all([playerAffiliations, playerStats, playerTraits]).then(values => {
                //     playerDetails.affiliation = values[0];
                //     playerDetails.stats = values[1];
                //     playerDetails.traits = values[2];

                //     res.status(200).json(playerDetails);
                // });

            })

            .catch(err => {
                console.log(`Problem while querying Affiliation table`);
            });


    });
}