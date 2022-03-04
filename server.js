const apiRoutes = require('./develop/routes/apiRoutes');
const htmlRoutes = require('./develop/routes/htmlRoutes');


const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// built-in middleware for express
app.use(express.urlencoded({
    extended: true
}));


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


