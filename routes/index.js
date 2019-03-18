const PersonalDetailController = require('../controllers').PersonalDetails;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message : 'Welcome to Todo API!',
    }));

    app.post('/api/PersonalDetails', PersonalDetailController.create);
};