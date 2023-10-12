require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const ratingRoute = require('./routes/rating.route')
const cors = require('cors')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

/*To connect with browser and server 
can interact to determine whether it is safe to allow the cross-origin request*/
app.use(cors({
    origin: "*"
}))

//Adding routes from the routes page
app.use('/', ratingRoute);


//Connecting the database
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("Database Connected Successfully")
}).catch((err) => {
    console.log(err.message)
})


//Connecting the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening to the port ${process.env.PORT}`)
})