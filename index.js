const express         = require('express')
const {dbConnection}  = require('./databases/config');
const cors            = require('cors');
const dotenv          = require('dotenv');

dotenv.config();

const app = express();

dbConnection();

app.use(cors());

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
 