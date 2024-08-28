const mongoose=require('mongoose');
require('dotenv').config();
const mongoURL=process.env.MONGO_URL;

// const mongoURL='process.env.MONGO_URL_LOCAL';

mongoose.connect(mongoURL);

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to mongoDB server');
})

db.on('error',(err)=>{
    console.log('Error:',err);
})

db.on('disconnected',()=>{
    console.log('Disconnected to mongoDB');
})

module.exports=db;