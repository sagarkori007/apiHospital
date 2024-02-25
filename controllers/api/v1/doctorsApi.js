const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

// For login
module.exports.createSession = async function(req,res){
    try{
        let user = await Doctor.findOne({username: req.body.username});
        if (!user || user.password != req.body.password){
            return res.json(422,{
                message: 'Invalid username or password'
            });
        }

        return res.json(200,{
            message: 'Sign in successful, here is your token',
            data: {
                token: jwt.sign(user.toJSON(),'apiHospital',{expiresIn: '1000000'})
            }
        })
    }catch(err){
        console.log('error',err);
        return res.json(500,{
            message: 'Internal server error'
        });
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
