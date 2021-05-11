const {response} = require('express');
const UserModel = require('../models/UserModel');

const login = (req, res) =>{

    res.json({
        ok:true,
        msg:'Login'

    })
}

const register = async (req, res = response ) =>{

    try {
        const user = new UserModel( req.body );

        await user.save();

        res.status(201).json({
            ok:true,
            uid:user.id,
            name:user.name
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok:false,
            msg: 'please talk to the administrator'
        })
    }
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

