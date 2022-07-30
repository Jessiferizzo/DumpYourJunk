const router = require('express').Router();

const {}



const { authMiddleware } = require('../../');


router.route('/').post(Login).put(authMiddleware,);

router.route('/Login').post(Login);

router.route('/me').get(authMiddleware, );



module.exports = router;