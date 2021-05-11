const {response} = require('express');
const {validationResult} =  require('express-validator');

const login = (req, res) =>{

    res.json({
        ok:true,
        msg:'Login'

    })
}


const register = (req, res = response ) =>{

    res.status(201).json({
        ok:true,
        msg:'Register',
        user:req.body
    })
}


const renew = (req, res) =>{
    res.json({
        ok:true,
        msg:'Renew'

    })
}


module.exports = {
    login,
    register,
    renew
};

