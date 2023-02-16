const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config');
const PORT = process.env.PORT || 3000;
const logger = require('morgan')


//routes
const userRoutes = require('./routes/userRoutes.js');
const managerRoutes = require('./routes/managerRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');

//middlewares
app.use(logger('dev'))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // allow requests from this origin
    credentials: true, // allow credentials to be sent with the request
}))

//databaseConnection
mongoose.set("strictQuery", false);  
mongoose.connect(process.env.mongodb);

//
app.use('/',userRoutes)
app.use('/admin',adminRoutes)

//serverPort
app.listen(PORT, () => console.log(`server started on ${PORT}`));
