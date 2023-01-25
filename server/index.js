const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const PORT = process.env.PORT || 3000;

//routes
const userRoutes = requrie('./routes/userRoutes.js');
const managerRoutes = requrie('./routes/managerRoutes.js');
const adminRoutes = requrie('./routes/adminRoutes.js');

//middlewares
app.use(express.json());

//databaseConnection
mongoose.connect(process.env.mongodb);

//serverPort
app.listen(PORT, () => console.log(`server started on ${PORT}`));
