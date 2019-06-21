const express = require('express');

const connectDB = require('./config/db');
const app = express();

connectDB();


//init middleware
app.use(express.json( {extended : false } )) ; // know whuy is this used <<<< 
// app.use(express.urlencoded());

app.get('/', (req, res) => res.send('API Running'));

// Define route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/duration', require('./routes/api/duration'));
app.use('/api/week', require('./routes/api/week'));


// app.use('/getlost', require('./sample.js'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>  console.log("Server running on", PORT));
// app.listen(1000, () =>  console.log("Server running on 8000"));
