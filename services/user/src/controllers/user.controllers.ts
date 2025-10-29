import { User } from "../model/user.model.js";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, name, image } = req.body;

    const user = await User.findOne({ email });
    
    if (user) {
      return res.status(400).json({ message: "User Already Exists" });
    }

    const newUser = await User.create({
      name,
      email,
      image,
    });

    const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
      expiresIn: "5d",
    });

    return res.status(201).json({ message: "Login success", token, newUser });
  } catch (error: any) {
    console.log("Error in login user funciton", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
