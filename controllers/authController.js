const {response} = require('express');
const {validationResult} =  require('express-validator');

const login = (req, res) =>{

    validate(req, res);

    res.json({
        ok:true,
        msg:'Login'

    })
}


const register = (req, res = response ) =>{

    validate(req, res);

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

const validate = (req, res)=>{
    
    const errors = validationResult(req);

    if ( !errors.isEmpty() ) {
        return res.status(400).json(
            {
                ok:false,
                errors: errors.mapped()
            }
        )
    }
}

module.exports = {
    login,
    register,
    renew
};

