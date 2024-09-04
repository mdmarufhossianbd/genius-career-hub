import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

// export async function GET () {
//     const db = await connectDB()
//     const jobCollection = db.collection('jobs')
//     try {
//         const result = await jobCollection.find().toArray()
//         NextResponse.json({message : "successfully get all jobs", result, status : 200, success : true})
//     } catch (error) {
//         NextResponse.json({message : "something went wrong", status : 500, success : false})
//     }
// }

export async function GET () {
    const db = await connectDB();
    const jobCollection = db.collection('jobs');
    try {
        const result = await jobCollection.find().toArray()
        return NextResponse.json({message : "successfully get all jobs", result, status : 200, success : true}) 
    } catch (error) {
        return NextResponse.json({message : "somthing prolem", error : error.message, status : 500, success : false})
    }
}