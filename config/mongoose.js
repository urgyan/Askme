const mongoose = require('mongoose');
const env = require('./environment');



mongoose.connect(`mongodb://localhost/${env.db}`);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to db'));

db.once('open' , ()=>{
    console.log('Connected to database successfully');
});


module.exports = db;