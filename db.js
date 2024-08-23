const mongoose=require('mongoose');

const mongoURL='mongodb://localhost:27017/Agency';

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