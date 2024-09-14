import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {slug} = params;    
    const db = await connectDB();
    const categoryCollection = db.collection('categories')
    const jobCollection =  db.collection('jobs')
    try {
        const query = {slug : slug}
        const categoryDetails = await categoryCollection.findOne(query)
        console.log('categoryDetails in backend =>',categoryDetails);
        const categoryName = categoryDetails.categoryName
        const jobQuery = {category : categoryName}
        const result = await jobCollection.find(jobQuery).toArray();
        return NextResponse.json({
            message : 'data is recived',
            status : '200',
            result,
            categoryDetails,
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