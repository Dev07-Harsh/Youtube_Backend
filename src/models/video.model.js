import mongoose,{schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new schema(
    {
        videofile: {
            type: string, //video deployed link
            required: true
        },
        thumbnail: {
            type: string, //thumbnail deployed link
            required: true
        },
        title: {
            type: string, 
            required: true
        },
        description: {
            type: string, 
            required: true
        },
        duration: {
            type: Number, //
            required: true
        },
        view:{
            type: Number,
            default: 0
        },
        ispublished: {
            type: Boolean,
            default: true
        },
        owner:{
                type: schema.Types.ObjectId,
                ref: "User"
        }
        

    },
    {
        timestamps: true
    }
)
 
videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoSchema)