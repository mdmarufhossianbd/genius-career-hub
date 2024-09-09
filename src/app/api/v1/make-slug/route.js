import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
    const db = await connectDB();
    const jobCollection = db.collection('jobs');
    try {
        const data = await request.json()
        if(data.slug.length <= 0){
            return NextResponse.json({
                message : 'slug value is required', data : data.slug, status : 204, success : false
            })
        }
        const query = {slug : data.slug}
        const existingSlug = await jobCollection.findOne(query);        
        if(existingSlug){
            return NextResponse.json({message : 'already used this slug', data : existingSlug, status : 401, success : false})
        }
        return NextResponse.json({message : 'it is unique slug', data : data.slug, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : 'Something went wrong'}, {status : 500}, {success : false})
    }
    
}