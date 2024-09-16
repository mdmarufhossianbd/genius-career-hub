import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB()
    const jobCollection = db.collection('jobs')
    const {searchParams} = new URL(request.url)
    const limit = parseInt(searchParams.get('limit')) || 10
    try {
        const savenDaysAgo = new Date() - 7 * 24 * 60 * 60 * 1000;
        const result = await jobCollection.find({publishDate : {$gte : savenDaysAgo}}).sort({publishDate : -1}).limit(limit).toArray()
        return NextResponse.json({
            message : 'Last 7 days jobs',
            status : 200,
            success : true,
            result
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}