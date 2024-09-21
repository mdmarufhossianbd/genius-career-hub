import { checkAdmin } from "@/config/protectAPI";
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const isUnauthorized = await checkAdmin()
    if(isUnauthorized) {
        return isUnauthorized
    }
    const db = await connectDB();
    const noticeCollection = db.collection('notices')
    try {
        const data = await request.json()
        const {title, description, category, pdfLink} = data
        if(!title || !description || !category || !pdfLink) {
            return NextResponse.json({
                message : 'Data is missing',
                status : 406,
                success : false
            })
        }
        const noticeInfo = {title, description, category, pdfLink}
        const result = await noticeCollection.insertOne(noticeInfo);
        return NextResponse.json({
            message : 'Successfully added notice',
            result,
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

export async function DELETE(request) {
    const isUnauthorized = await checkAdmin();
    if(isUnauthorized){
        return isUnauthorized
    }
    const db = await connectDB()
    const noticeCollection = db.collection('notices')
    try {
        const {id} = await request.json()
        const query = {_id : new ObjectId(id)}
        const result = await noticeCollection.deleteOne(query)
        return NextResponse.json({
            message : 'Successfully delete notice',
            status : 200,
            result,
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

export async function GET(request) {
    const db = await connectDB();
    const noticeCollection = db.collection('notices');
    try {
        const {searchParams} = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit
        const result = await noticeCollection.find().sort({_id : -1}).skip(skip).limit(limit).toArray()
        const totalNotices = await noticeCollection.countDocuments()
        return NextResponse.json({
            message : 'successfully loaded notice',
            success : true,
            status : 200,
            result,
            currentPage : page,
            totalPages : Math.ceil(totalNotices / limit),
            totalNotices
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}