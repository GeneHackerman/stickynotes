const router = require('express').Router();

const notesRoutes = require('./noteRoutes.js');

// uses specified middleware
router.use(notesRoutes);

// maps callbacks 
module.exports = router;