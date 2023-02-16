const mongoose = require("mongoose");

// Schemas

const movieSchema = new mongoose.Schema(
    {
        mov_title:{
            type: String,
            unique:true
        },
        mov_year:{
            type: String
        },
        mov_time:{
            type: Number
        },
        mov_lang:{
            type: String
        },
        mov_dt_rel : {
            type: String
        },
        mov_rel_country:{
            type:String
        },
        gen_title: {
            type: String
        }
    },
    {
        timestamps:true
    }
)

const movieDirectionSchema = new mongoose.Schema(
    {
        dir_info:{
            type:{
                dir_name:{
                    type:String,
                },
                dir_lastname:{
                    type:String
                }
            },
        },
        mov_id:{
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps:true
    }
)

const raitingSchema = new mongoose.Schema(
    {
        mov_id:{
            type: mongoose.Types.ObjectId
        },
        reviewer:{
            type:{
                rev_name:{
                    type:String,
                }
            }
        },
        rev_stars: {
            type: Number
        },
        num_o_raitings: {
            type: Number
        }
    }
)

const movieCastSchema= new mongoose.Schema(
    {
        actor:{
            type:{
                act_name:{
                    type:String,
                },
                act_lastName:{
                    type:String,
                }
            }
        },
        mov_id:{
            type: mongoose.Types.ObjectId
        }
    }
)

module.exports = mongoose.model("movie", movieSchema);
module.exports = mongoose.model("cast", movieCastSchema);
module.exports = mongoose.model("ranking", rankingSchema);
module.exports = mongoose.model("direction", movieDirectionSchema);
