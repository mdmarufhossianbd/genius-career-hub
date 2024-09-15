import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const jobCollection = db.collection('jobs');
    try {
        const {searchParams} = new URL(request.url);
        const categoryName = searchParams.get('category');
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;
        const query = {category : categoryName};
        const result = await jobCollection.find(query).sort({_id : -1}).skip(skip).limit(10).toArray();
        return NextResponse.json({
            message : 'Successfully fetch data',
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