const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const {errorHandler}=require('./middleware/errorMiddleware')
const colors = require ('colors')
const eventRoute = require('./routes/eventRoutes')
const usersRoute =require('./routes/userRoutes')
const connectDB = require('./config/db')
const { default: mongoose } = require('mongoose')
const port = process.env.PORT || 5000
mongoose.set('strictQuery',true)
connectDB()
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/calendar',eventRoute )
app.use('/signup',usersRoute ) 
app.use('/signin',usersRoute ) 
app.use(errorHandler)
if(process.env.NODE_ENV==="production"){
   app.use(express.static(path.join("frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
});
}
app.listen(port,()=> console.log(`Server started on port ${port}`))
