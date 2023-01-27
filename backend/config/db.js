const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('your id here');
require('dotenv').config();
const connectDB = async()=>{
    try{
const conn = await mongoose.connect('mongodb://localhost:27017/gestiontemps')
console.log(` MongoDB connected : ${conn.connection.host}`.cyan.
underline)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;