const Doctor = require('../../../models/doctor');
// const jwt = require('jsonwebtoken');

// For login
module.exports.login = async function(req, res) {
    try {
        // Find the doctor from the db
        const doctor = await Doctor.findOne({ username: req.body.username });

        // Check the authentication
        if (!doctor || doctor.password != req.body.password){
            return res.json(422,{message: 'invalid username or password'});
        }

        //incomplete
        return res.json(200,{
            message: ' Doctor logged in successfully', 
            data: {
                token: jwt.sign(doctor.toJSON(),)
            }
        })

    } catch(err) {
        console.log('Error in creating the JWT token: ', err);
        return res.status(500).json({ message: 'Internal Error' });
    }
}

// For register - completed 
module.exports.register = async function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    console.log(req.body);

    if (!username || !password) {
        return res.status(422).json({ message: 'Please enter the username and password' });
    }

    try {
        const existingDoctor = await Doctor.findOne({ username: username });

        if (!existingDoctor) {
            await Doctor.create({ username: username, password: password });
            console.log('Doctor created successfully');
            return res.status(200).json({ message: `Doctor created successfully ${username}` });
        } else {
            return res.status(409).json({ message: 'Doctor already exists' });
        }
    } catch(error) {
        console.log('Error while creating the doctor:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
