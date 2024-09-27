import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const db = await connectDB();
    const noticeCollection = db.collection('notices');
    try {
        const {_id} = params;
        const query = {_id : new ObjectId(_id)};
        const result = await noticeCollection.findOne(query)
        return NextResponse.json({
            message : 'successfully loaded notice',
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