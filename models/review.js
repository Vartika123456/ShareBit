const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const reviewSchema=new mongoose.Schema(
    {
        rating:Number,
        body:String,
        author:{
            type:Schema.Types.ObjectId,
            ref:'User'
        }
        
    }
)

const Review=mongoose.model('Review',reviewSchema);
module.exports=Review;