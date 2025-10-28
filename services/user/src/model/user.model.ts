import mongoose, { Schema } from "mongoose";

export interface User {
  name: string;
  email: string;
  image: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  bio: string;
}

const userSchema: Schema<User> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<User>("User", userSchema);
