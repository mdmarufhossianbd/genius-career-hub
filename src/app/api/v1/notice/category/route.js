import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const noticeCollection = db.collection('notices')
    try {
        const {searchParams} = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const category = searchParams.get('category')
        const skip = (page - 1) * limit;
        const query = {category : category}
        const result = await noticeCollection.find(query).sort({_id : -1}).skip(skip).limit(limit).toArray();
        const totalNotice = await noticeCollection.countDocuments(query)
        return NextResponse.json({
            message : 'data fetch successfully',
            status : 200,
            result,
            currentPage : page,
            totalPages : Math.ceil(totalNotice / limit),
            totalNotice,
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