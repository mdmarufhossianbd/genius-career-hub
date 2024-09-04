import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST (request) {
    const db = await connectDB();
    const jobCollection = db.collection('jobs')
    
    try {
        const data = await request.json();
        const {title} = data;
        const createSlug = title.toLowerCase().split(' ').join('-');
        const uniqueNumber = Date.now();
        const slug = createSlug + ('-') + uniqueNumber;     
        const author = data.author;
        if(author === "admin" === false){
            return NextResponse.json({message : "unauthorized access", status : 401, success : false })
        }
        const jobInfo = {
            publishStatus : "published",
            title : data.title,
            slug,
            category : data.category,
            company : data.company,
            description : data.description,
            experince : data.experince,
            experinceDuration : data.experinceDuration,
            jobDeadline : data.jobDeadline,
            jobType : data.jobType,
            location : data.location,
            salary : data.salary,
            thumbnailUrl: data.thumbnailUrl,
            vacancy : data.vacancy,
            author,
            meta : data.meta,
            
        }
        const result = await jobCollection.insertOne(jobInfo);       
        return NextResponse.json({message : 'job added successfully', result, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : 'somthing went wrong', status : 500, success : false})
    }
}