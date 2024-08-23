const express=require('express');
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('Welcome to My Intelligence Agency');
});

const agentRoute=require('./routes/agentRoute');
app.use('/agents',agentRoute);

app.listen(4720,()=>{
    console.log('Listening on port:4720');
});