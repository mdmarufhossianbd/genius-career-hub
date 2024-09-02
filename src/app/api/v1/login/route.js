import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export const POST = async(request) => {
    const db = await connectDB();
    const data = await request.json();
    const loginInfo = data.loginInfo;
    try {
        const userCollection = db.collection('users');
        const existingUser = await userCollection.findOne({email : loginInfo.email})
        if(!existingUser){
            return NextResponse.json({message : "Please check your email or password", status : 401, success : false})
        }
        const checkPassword = bcrypt.compareSync(loginInfo.password, existingUser.password)
        if(!checkPassword){
            return NextResponse.json({message : "Please check your email or password", status : 401, success : false})
        }
        
        // token generate
        const tokenData = {
            id : existingUser._id,
            userName: existingUser.userName,
            email: existingUser.email
        }
        
        const token =  jwt.sign(tokenData, process.env.NEXT_PUBLIC_JWT_SECRECT_KEY, {expiresIn : '24h'})
        cookies().set({
            name : 'token',
            value : token,
            secure : true,
            httpOnly : true,
            path : '/',
            sameSite : "Strict",            
        })
        return NextResponse.json({message : "Login successfully", user: existingUser, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : "something went worng", status : 500, success : false})
    }
}