const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes/index');
const htmlRoutes = require('./routes/htmlRoutes/index');


const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// built-in middleware for express
app.use(express.urlencoded({ extended: true }));


// specifies root directory to pull assets from
app.use(express.json());
app.use(express.static('public'));


// connects routes to application
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// makes sure connection to server is live
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


