import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST (request) {
    const db = await connectDB();
    const jobCollection = db.collection('jobs')
    const companyCollection = db.collection('companies')
    
    try {
        const data = await request.json();        
        const author = data.author;
        if(author === "admin" === false){
            return NextResponse.json({message : "unauthorized access", status : 401, success : false })
        }
        const query = {name : data.company}
        const companyInfo = await companyCollection.findOne(query)
        const jobInfo = {
            publishStatus : "published",
            applyLink : data.applyLink,
            author,
            category : data.category,
            company : data.company,
            companyInfo,
            description : data.description,
            experince : data.experince,
            experinceDuration : data.experinceDuration,
            jobDeadline : data.jobDeadline,
            jobType : data.jobType,
            location : data.location,
            meta : data.meta,
            publishDate : Date.now(),
            salary : data.salary,
            slug : data.slug,
            thumbnailUrl: data.thumbnailUrl,
            title : data.title,            
            vacancy : data.vacancy,
        }
        const result = await jobCollection.insertOne(jobInfo);       
        return NextResponse.json({message : 'Job publish successfully', result, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : 'somthing went wrong', status : 500, success : false})
    }
}