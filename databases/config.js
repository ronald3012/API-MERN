const {connect} = require('mongoose');


const dbConnection =  async () =>{
    try {
        
        await connect(
            process.env.DB_CNN, 
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        );

        console.log('DB Online');




    } catch (error) {
        console.log(error);
        throw new Error('The database could not be initialized');
    }
}

module.exports = {
    dbConnection
}