const mongoose = require("mongoose");


mongoose.set('useCreateIndex', true);
const actorSchema = new mongoose.Schema({
    act_name:{
        type:String,
        require:true,
        unique:true
    },
    act_lastName:{
        type:String,
        require:true,
        unique:true
    },
    act_gender:{
        type:String,
        require:true,
        unique:true
    },
},
    {
    timestamps:true //This create a creation date and update date
    }
)

const directorSchema = new mongoose.Schema({
    dir_name:{
        type:String,
        require:true
    },
    dir_lastname:{
        type:String,
        require:true
    }
},
    {
        timestamps:true
})

const reviewerSchema = new mongoose.Schema({
    rev_name:{
        type:String,
        require:true
    }
},
    {
        timestamps:true
})

const genderSchema = new mongoose.Schema({

    gen_tittle:{
        type:String
    }
})