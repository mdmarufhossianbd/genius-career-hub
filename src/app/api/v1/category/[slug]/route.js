import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const db = await connectDB()
    const categoryCollection = db.collection('categories')
    const jobCollection = db.collection('jobs')
    const {searchParams} = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1
    const limit = parseInt(searchParams.get('limit')) || 10
    try {
        const {slug} = params;
        const query = {slug : slug}
        const category = await categoryCollection.findOne(query)
        if(!category){
            return NextResponse.json({
                message : 'Not found category',
                status : 404,
                result : category
            })
        }
        const categoryName = category?.categoryName;
        const findJobQuery = {category : categoryName}
        const skip = (page - 1) * limit
        const result = await jobCollection.find(findJobQuery).sort({_id : -1}).skip(skip).limit(limit).toArray()
        const totalCount = await jobCollection.countDocuments(findJobQuery);
        return NextResponse.json({
            message : 'slug found',
            result,
            totalJobs : totalCount,
            currentPage : page,
            toalPage : Math.ceil(totalCount / limit),
            status : 200,
            success : true
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}