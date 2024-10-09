    const express = require('express');
    const router = express.Router()
    const {registerUser , loginUser, currentUser } = require('../controllers/userControllers');
const validationToken = require('../middleware/validateTokenHandler');

    router.post('/register', registerUser)

    router.post('/login',  loginUser)

    router.get('/current', validationToken, currentUser)


    module.exports = router