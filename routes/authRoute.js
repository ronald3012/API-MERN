/*
    user routes / Auth
    host + /api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const router = Router();

const {login, register, renew} = require('../controllers/authController');


router.post(
    '/',
    [
        check('email','Email is required').isEmail(),
        check('password','Password required and a minimum of 6 characters').isLength({min:6}),
    ], 
    login);



    
router.post(
    '/new',
    [ 
        check('name','Name is required').not().isEmpty(),
        check('email','Email is required').isEmail(),
        check('password','Password required and a minimum of 6 characters').isLength({min:6}),
    ], 
    register);




router.get('/renew', renew);



module.exports = router;