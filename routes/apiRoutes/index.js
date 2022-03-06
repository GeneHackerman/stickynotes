const router = require('express').Router();

const notesRoutes = require('./noteRoutes');

// uses specified middleware
router.use(notesRoutes);

// maps callbacks 
module.exports = router;