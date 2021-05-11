const express = require('express')
require('dotenv').config();

const app = express();

app.use(express.static('public') );

app.use('/api/auth', require('./routes/authRoute') );

app.listen(process.env.PORT, () => {
  console.log(`App listening at http://localhost:${process.env.PORT}`)
})
 