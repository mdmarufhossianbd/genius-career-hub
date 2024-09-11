import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {category} = params;
    const db = await connectDB();
    const jobCollection =  db.collection('jobs')
    try {
        const query = {category : category}
        const result = await jobCollection.find(query).toArray();
        return NextResponse.json({
            message : 'data is recived',
            status : '200',
            result,
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