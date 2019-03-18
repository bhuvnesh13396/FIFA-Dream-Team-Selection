'use strict';
const Player = require('../sequelize');
module.exports = (app) => {
    app.get('/api/getPlayerInfo/:playerName', (req,res)=>{
        console.log(`Query String ${req.params.playerName}`);
        //const playerName = req.body.playerName;
        const playerName = req.params.playerName;

        // Get the personal details of the given player
         Player.findAll({
             where : {
                 Name : playerName
             }
         })
            .then(user => {
                console.log(user);
                if(user != null){
                    console.log('User found!');
                    res.status(200).json(user);
                }
            })

            .catch(err => {
                console.log(`Problem with database communication`);
                res.status(500).json(err);
            })
    })
}