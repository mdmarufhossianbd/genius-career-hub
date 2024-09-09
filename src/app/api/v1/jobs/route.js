import { checkAdmin } from "@/config/protectAPI";
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

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

export async function DELETE (request) {
    const isUnauthorized = await checkAdmin();
    if(isUnauthorized) {
      return isUnauthorized
    }
    const db = await connectDB();
    const jobCollection = db.collection('jobs');
    try {
        const data = await request.json();
        const id = data._id;
        const query = {_id : new ObjectId(id)};
        const result = await jobCollection.deleteOne(query);
        return NextResponse.json({message : "Successfully deleted", result, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : "somthing went wrong", status : 500, success : false})
    }
}