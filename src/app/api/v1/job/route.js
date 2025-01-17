import { checkAdmin } from "@/config/protectAPI";
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
    const db = await connectDB();
    const jobCollection = db.collection('jobs');
    try {
        const result = await jobCollection.find().toArray()
        return NextResponse.json({
            message : 'All jobs found',
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

export async function POST(request) {
    const isUnauthorized = await checkAdmin();
    if(isUnauthorized) {
      return isUnauthorized
    }
    const db = await connectDB();
    const jobCollection = db.collection('jobs')
    const companyCollection = db.collection('companies')

    try {
        const data = await request.json();
        const author = data.author;
        if (author === "admin" === false) {
            return NextResponse.json({
                message: "unauthorized access",
                status: 401,
                success: false
            })
        }
        const query = {
            name: data.company
        }
        const companyInfo = await companyCollection.findOne(query)
        const jobInfo = {
            publishStatus: "published",
            applyLink: data.applyLink,
            author,
            age : data.age,
            category: data.category,
            company: data.company,
            companyInfo,
            description: data.description,
            education : data.education,
            experince: data.experince,
            experinceDuration: data.experinceDuration,
            jobDeadline: data.jobDeadline,
            jobType: data.jobType,
            location: data.location,
            meta: data.meta,
            publishDate: Date.now(),
            salary: data.salary,
            slug: data.slug,
            thumbnailUrl: data.thumbnailUrl,
            title: data.title,
            vacancy: data.vacancy,
        }
        const result = await jobCollection.insertOne(jobInfo);
        return NextResponse.json({
            message: 'Job publish successfully',
            result,
            status: 200,
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: 'somthing went wrong',
            status: 500,
            success: false
        })
    }
}

export async function PUT(request) {
    const isUnauthorized = await checkAdmin();
    if(isUnauthorized) {
      return isUnauthorized
    }
    const db = await connectDB();
    const jobCollection = db.collection('jobs')
    const companyCollection = db.collection('companies')
    try {
        const data = await request.json();
        const companyInfo = await companyCollection.findOne({name : data.company})
        const query = {_id: new ObjectId(data._id)}
        const oparation = {
            $set: {
                publishStatus: "published",
                applyLink: data.applyLink,
                author : data.author,
                age : data.age,
                category: data.category,
                company: data.company,
                companyInfo,
                description: data.description,
                education : data.education,
                experince: data.experince,                
                experinceDuration: data.experinceDuration,
                jobDeadline: data.jobDeadline,
                jobType: data.jobType,
                location: data.location,
                meta: data.meta,
                publishDate: Date.now(),
                salary: data.salary,
                slug: data.slug,
                thumbnailUrl: data.thumbnailUrl,
                title: data.title,
                vacancy: data.vacancy,
            }
        }
        const upsert = {upsert : true}
        const result = await jobCollection.updateOne(query, oparation, upsert)
        return NextResponse.json({message : 'Job update successfully', result, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({
            message: 'somthing went wrong',
            status: 500,
            success: false
        })
    }
}

export async function DELETE(request) {
    const isUnauthorized = await checkAdmin();
    if(isUnauthorized) {
      return isUnauthorized
    }
    const db = await connectDB()
    const jobCollection = db.collection('jobs')
    try {
        const data = await request.json();
        const query = {_id : new ObjectId(data._id)}
        const result = await jobCollection.deleteOne(query);
        return NextResponse.json({
            message : 'Job deleted successfully',
            status : 200,
            result,
            success : true
        })
    } catch (error) {
        return NextResponse.json({
            message: 'somthing went wrong',
            status: 500,
            success: false
        })
    }
}