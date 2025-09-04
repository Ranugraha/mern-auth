import mongoose  from "mongoose";

const connectDB = async ()=> {

    mongoose.connection.on('connected', ()=>console.log("Databse Connected"))

    await mongoose.connect(`${process.env.MONGDB_URL}/mern-auth`)
}

export default connectDB; 