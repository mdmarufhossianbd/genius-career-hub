import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {slug} = params;
    const db = await connectDB()
    const jobCollection = db.collection('jobs')
    try {
        const result = await jobCollection.findOne({slug : slug})
        return NextResponse.json({message : 'data is recived', result, status : 200, success : true});
    } catch (error) {
        return NextResponse.json({message : 'Somthing went wrong'}, {status : 500}, {success : false})
    }
}