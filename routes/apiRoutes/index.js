const router = require('express').Router();

const notesRoutes = require('/apiRoutes/noteRoutes');

// uses specified middleware
router.use(notesRoutes);

// maps callbacks 
module.exports = router;