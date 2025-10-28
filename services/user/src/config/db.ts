import mongoose from "mongoose";

export const connectDB=async(DB_URI:string)=>{
  try {
    
    await mongoose.connect(DB_URI);
    console.log('Connected to Database Successfully');
  } catch (error) {
    
    console.log('MongoDB connection failed');
  }
}