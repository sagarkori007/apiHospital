const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1/api_hospital_1');

//acquire the connection
const db = mongoose.connection;

//error 
db.on('error', function(error){
    console.log('Error while connecting to the db: ', error);
});


db.once('open', function(message){
    console.log('Successfully connected to the api_hospital_db: ',message);
});

module.exports = db;