import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const db = await connectDB();
    const companyCollection = db.collection("companies")
    try {
    const data = await request.json(); 
    const companyInfo = data.companyInfo;    
    const query = {name : companyInfo?.name}
    const existCompany = await companyCollection.find(query).toArray();
    console.log(existCompany);
    if(existCompany.length > 0 ){
        return NextResponse.json({
            message : "Already added this company.", success : false, status : 400 
        })
    }
    const result = await companyCollection.insertOne(companyInfo);

    return NextResponse.json({ message: 'Company added successfully', result,  status : 200, success : true});
  } catch (error) {
    return NextResponse.json({ message: 'Error receiving data', error: error.message }, { status: 500 });
  }
}
