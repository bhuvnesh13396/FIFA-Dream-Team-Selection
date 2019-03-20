'use strict';
const {Player,PlayerAffiliations} = require('../sequelize');
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
                    PlayerAffiliations.findAll({
                        where : {
                            ID : playerId
                        }
                    })
                        .then(playerAffiliations => {
                            console.log(`Player affiliations - ${JSON.stringify(playerAffiliations)}`);
                            playerDetails.affiliation = playerAffiliations;

                            res.status(200).json(playerDetails);
                        })

                        .catch(err => {
                            console.log(`Error while quering Affiliations ${err}`);
                        });

                }
            })

            .catch(err => {
                console.log(`Problem with database communication`);
                res.status(500).json(err);
            });

    })
}