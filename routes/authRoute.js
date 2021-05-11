/*
    user routes / Auth
    host + /api/auth
*/

const {Router} = require('express');
const router = Router();

const {login, register, renew} = require('../controllers/authController');


router.post('/', login);

router.post('/new', register);

router.get('/renew', renew);



module.exports = router;