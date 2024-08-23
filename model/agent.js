const mongoose=require('mongoose');

const agentSchema=mongoose.Schema({
    code_name:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },
    years_of_service:{
        type:Number,
        required:true
    },
    current_status:{
        type:String,
        enum:['Active','Undercover','Retired','MIA'],
        default:'Active'
    }
})

const agent=mongoose.model('agent',agentSchema);
module.exports=agent;