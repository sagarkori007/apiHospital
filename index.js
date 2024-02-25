const express = require('express');
const app = express();
const db = require('./config/mongoose');
const passportJWT = require('./config/passport-jwt-strategy');


const port = 8000;


//get post info/ decrept the post to read body
app.use(express.urlencoded({ extended: true }));

//middle wear, loading up the router
app.use('/',require('./routes/index'));

app.listen(port, function(err){
    if(err){
        console.log('Error in starting the server at port: ',port);
    } else {
        console.log('Server started successfully', port);
    }
});
