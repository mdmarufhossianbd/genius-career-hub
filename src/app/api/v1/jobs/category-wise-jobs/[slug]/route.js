import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {slug} = params;
    const {searchParams} = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const db = await connectDB();
    const categoryCollection = db.collection('categories')
    const jobCollection =  db.collection('jobs')
    try {
        const query = {slug : slug}
        const categoryDetails = await categoryCollection.findOne(query)
        const categoryName = categoryDetails.categoryName
        const jobQuery = {category : categoryName}
        const skip = (page - 1) * limit
        const result = await jobCollection.find(jobQuery).sort({_id : -1}).skip(skip).limit(limit).toArray();
        const totalJobs = await jobCollection.countDocuments(jobQuery)
        return NextResponse.json({
            message : 'data is recived',
            status : '200',
            result,
            categoryDetails,
            currentPage : page,
            totalPages : Math.ceil(totalJobs / limit),
            totalJobs,
            success : true
        })
    } catch (error) {
        return NextResponse.json({
            message : 'somthing went wrong',
            status : 500,
            success : false
        })
    }
}