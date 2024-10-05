import { checkAdmin } from "@/config/protectAPI";
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET (request) {
    const db = await connectDB();
    const jobCollection = db.collection('jobs');
    try {
        const {searchParams} = new URL(request.url);        
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit
        const sort = {_id : -1}
        const result = await jobCollection.find().sort(sort).skip(skip).limit(limit).toArray();
        const totalJobs = await jobCollection.countDocuments();
        return NextResponse.json({
            message : "Successfully get all jobs",
            result,
            currentPage : page,
            totalPages : Math.ceil(totalJobs / limit),
            totalJobs,
            status : 200,
            success : true
        }) 
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