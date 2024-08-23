const express=require('express');
const router=express.Router();
const agent=require('../model/agent');

router.post('/',async (req,res)=>{
    try{
        const data=req.body;
        const newAgent=new agent(data);
        const savedData=await newAgent.save();
        console.log('Data Saved');
        res.status(200).json(savedData);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ERROR:'Internal Server Error'});
    }
})

router.get('/',async (req,res)=>{
    try{
        const data=await agent.find();
        console.log('Data Fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({ERROR:'Internal Server Error'});
    }
})

router.get('/:status', async(req,res)=>{
    try{
        const status=req.params.status;
        if(status=='Active' || status=='Undercover' || status=='Retired' || status=='MIA')
        {
            const response=await agent.find({current_status:status});
            console.log('Data Fetched');
            res.status(200).json(response);
        }
        else
        {
            res.status(404).json({ERROR:"Invalid Status"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ERROR:'Internal Server Error'});
    }
});

router.put('/:id', async(req,res)=>{
    try{
        const agentId=req.params.id;
        const updatedAgentData=req.body;
        const response=await agent.findByIdAndUpdate(agentId,updatedAgentData,{
            new:true,
            runValidators:true
        })

        if(!response){
            res.status(404).json({Error:"Agent not found"});
        }

        console.log('Data Updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({Error:"Internal Server Error"});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const agentId=req.params.id;
        const response=await agent.findByIdAndDelete(agentId);

        if(!response){
            res.status(404).json({Error:"Agent not found"});
        }

        console.log('Data Deleted');
        res.status(200).json({Message:"Agent Deleted"});

    }catch(err){

    }
})

module.exports=router;

