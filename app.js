const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:dEe81m0VBTO2H5Lt@cluster0.iq20s.mongodb.net/auth-mern?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true
    },()=>{
    console.log('successfully connected to database');
});

const userRouter = require('./routes/User');
app.use('/user',userRouter);

app.listen(5000,()=>{
   console.log('express server started'); 
});