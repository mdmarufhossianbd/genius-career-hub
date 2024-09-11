import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export  async function GET(request) {
    const db = await connectDB()
    const jobCollection = db.collection('jobs')
    try {
        const {searchParams} = new URL(request.url)        
        const query = searchParams.get('keyword') || ''
        const page = parseInt(searchParams.get('page') || '1', 9);
        const limit = parseInt(searchParams.get('limit') || '9', 9)
        const filter = query ? {location : {$regex: query, $options: 'i'}} : {}
        const skip = (page - 1) * limit;
        const foundJobs = await jobCollection.countDocuments(filter);
        const result = await jobCollection.find(filter).skip(skip).limit(limit).toArray();
        return NextResponse.json({
            total : foundJobs,
            currentPage : page,
            totalPage : Math.ceil(foundJobs / limit),
            result
        })
        
    } catch (error) {
        return NextResponse.json({
            message : 'somthing went wrong',
            status : 500,
            success : false
        })
    }
}