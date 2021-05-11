const express = require('express')
require('dotenv').config();
const {dbConnection} = require('./databases/config');

const app = express();

dbConnection();

app.use(
  express.static('public') 
);

app.use(
  express.json()
);

app.use('/api/auth', 
        require('./routes/authRoute') 
);

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
});
 