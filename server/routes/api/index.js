const router = require('express').Router();
const userRoutes = require('./user-routes');
const login


router.use('/users', userRoutes);

module.exports = router;