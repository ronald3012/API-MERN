

const login = (req, res) =>{
    res.json({
        ok:true,
        msg:'Login'

    })
}


const register = (req, res) =>{
    res.json({
        ok:true,
        msg:'Register'
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

