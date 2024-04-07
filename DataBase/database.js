import mongoose from "mongoose";


export const dbConnect = () =>{
    mongoose.connect("mongodb+srv://skillzee:parth123@shyftlabs.g4azhzh.mongodb.net/",{
    dbName: "FluencoShyftLabs",
}).then((c)=>{
    console.log(`Database connected`);
}).catch((e)=>{
    console.log(e);
})
}