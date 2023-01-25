const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = process.env.PORT || 3001;

//routes
const userRoutes = require('./routes/userRoutes.js');
const managerRoutes = require('./routes/managerRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');

//middlewares
app.use(express.json());

//databaseConnection
mongoose.set("strictQuery", false);  
mongoose.connect(process.env.mongodb);

//serverPort
app.listen(PORT, () => console.log(`server started on ${PORT}`));
