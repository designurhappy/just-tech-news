const User = require('./User');
const Post = requre("./Post");

module.exports = { User, Post };

const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;