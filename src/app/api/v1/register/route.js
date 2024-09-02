import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async(request) =>{
    const db = await connectDB();
    const data = await request.json();
    const userInfo = data.registerInfo;
    try {
        const userCollection = db.collection('users');
        const existingUser = await userCollection.findOne({email : userInfo.email})
        if(existingUser){
            return NextResponse.json({message : "Already have an account", status : 406, success : false})
        }
        const hassPassword = bcrypt.hashSync(userInfo.password, 14)
        const user = {
            name : "Super Admin",
            userName: "admin",
            photoURL: "https://firebasestorage.googleapis.com/v0/b/genius-career-hub.appspot.com/o/genius-career-hub%2Fadmin.jpg?alt=media&token=f87a6ab0-4a55-49c3-91eb-166716ac7785",
            email : userInfo.email,
            password : hassPassword
        }
        const result = await userCollection.insertOne(user);
        return NextResponse.json({message : "Account create successfully", userInfo : result, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : "somthing went worng", status : 500, success : false})
    }
}