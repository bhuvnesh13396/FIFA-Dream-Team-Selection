'use strict';
const {Player, PlayerAffiliations, PlayerStats, PlayerTraits} = require('../sequelize');
module.exports = (app) => {
    app.get('/api/getPlayerInfo/:playerName', (req,res)=>{
        
        // Response object to be returned as final result 
        // after querying from multiple tables
        let playerDetails = {};
        // Get the playerName from request parameters.
        const playerName = req.params.playerName;

        // Query personal details of the given player
         Player.findAll({
             where : {
                 Name : playerName
             }
         })
            .then(personalDetails => {
                console.log('Personal Details -----> ',personalDetails);
                
                if(personalDetails != null){
                    playerDetails.personalDetails = personalDetails;
                    const playerDetailsJSON = JSON.stringify(personalDetails);

                    const playerId = JSON.parse(playerDetailsJSON)[0].ID;
                    console.log(`PlayerId - ${playerId}`);

                    // Query player's affilations table
                    let playerAffiliations = PlayerAffiliations.findAll({
                        where : {
                            ID : playerId
                        }
                    });
                        
                    // Query player's stats table
                    let playerStats = PlayerStats.findAll({
                        where : {
                            ID : playerId
                        }
                    });
                           

                    // Query player's traits table
                    let playerTraits = PlayerTraits.findAll({
                        where : {
                            ID : playerId
                        }
                    });
                        
                    // Return response after quering all the 
                    // tables(affiliation, stats, trait)
                    Promise.all([playerAffiliations, playerStats, playerTraits]).then(values => {
                        playerDetails.affiliation = values[0];
                        playerDetails.stats = values[1];
                        playerDetails.traits = values[2];

                        res.status(200).json(playerDetails);
                    });

                }
            })

            .catch(err => {
                console.log(`Problem with database communication`);
                res.status(500).json(err);
            });

    })
}