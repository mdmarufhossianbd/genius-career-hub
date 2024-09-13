import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
    const isUnauthorized = await checkAdmin();
    if(isUnauthorized){
        return isUnauthorized
    }
    const db = await connectDB();
    const categoriesCollection = db.collection('categories')
    try {
        const data = await request.json()
        if(data.slug.length <= 0){
            return NextResponse.json({
                message : 'Slug value is required',
                status : 204,
                data : data.data.slug,
                success : false
            })
        }
        const query = {slug : data.slug}
        const existingSlug = await categoriesCollection.findOne(query)
        if(existingSlug){
            return NextResponse.json({
                message : 'Already used this slug',
                data : existingSlug,
                status : 401,
                success : false
            })
        }
        return NextResponse.json({
            message : 'You can use it',
            data : data.slug,
            status : 200,
            success : true
        })
        
        
    } catch (error) {
        return NextResponse.json({
            message : 'something went wrong',
            status : 500,
            success : false
        })
    }
}