const {response}  = require('express');
const bcrypt      = require('bcryptjs');
const UserModel   = require('../models/UserModel');
const generateJWT = require('../helpers/jwt');

const login = async (req, res) =>{

    try {

        const user = await UserModel.findOne({email:req.body.email});

        let validPasword; 

        user? validPasword = await bcrypt.compareSync(req.body.password, user.password):'';
        
        if (!user || !validPasword) {
            return res.status(401).json({
                ok:false,
                msg:'Email or password is not correct'
            })
        }

        const token = await generateJWT( user.id, user.name );


        res.json({
            ok:true,
            uid:user.id,
            name:user.name,
            token
        });


    } catch (error) {

        console.log(error);
        return res.status(400).json({
            ok:false,
            msg:'Error'
        })
    }


}

const register = async (req, res = response ) =>{

    try {

        let user = new UserModel( req.body );
        const salt =  bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( req.body.password, salt );

        await user.save();
        const token = await generateJWT( user.id, user.name );

        res.status( 201 ).json({
            ok:true,
            uid:user.id,
            name:user.name,
            token
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Please talk to the administrator'
        })
    }
}

const renew = async (req, res) =>{

    const {uid, name} =  req;
    const token = await generateJWT( uid,name );

    res.json({
        ok:true,
        uid,
        name,
        token

    })
}

module.exports = {
    login,
    register,
    renew
};

