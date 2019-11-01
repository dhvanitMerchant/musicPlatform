// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const artistRoutes = require('./routes/artists');
const stagesRoutes = require('./routes/stages');
const sessionRoutes = require("./routes/sessions");


// Registering our pageRoutes
// app.use('/', pageRoutes);
app.use('/artists', artistRoutes);
app.use('/stages', stagesRoutes);


app.use("/", sessionRoutes);
// Exporting the changes
module.exports = app;