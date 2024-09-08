import { connectDB } from '@/lib/connectDB';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const db = await connectDB();
    const companyCollection = db.collection("companies")
    try {
    const data = await request.json(); 
    const companyInfo = data.companyInfo;    
    const query = {name : companyInfo?.name}
    const existCompany = await companyCollection.find(query).toArray();
    if(existCompany.length > 0 ){
        return NextResponse.json({
            message : "Already added this company.", success : false, status : 400 
        })
    }
    const result = await companyCollection.insertOne(companyInfo);

    return NextResponse.json({ message: 'Company added successfully', result,  status : 200, success : true});
  } catch (error) {
    return NextResponse.json({ message: 'Error receiving data', error: error.message }, { status: 500 }, {success : false});
  }
}

export async function GET () {
    const db = await connectDB();
    const companyCollection = db.collection('companies');
    try {
        const result = await companyCollection.find().toArray()
        return NextResponse.json({message : "All company found", result, status : 200, success : true}) 
    } catch (error) {
        return NextResponse.json({message : "somthing prolem", error : error.message, status : 500, success : false})
    }
}

export async function DELETE(request) {
    const db = await connectDB();
    const companyCollection = db.collection('companies')
    try {
        const data = await request.json()
        const query = {_id : new ObjectId(data._id)}
        const result = await companyCollection.deleteOne(query)
        return NextResponse.json({message : 'Company Deleted successfully', result, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : 'something went wrong', status : 500, success : false})
    }
}

export async function PUT(request) {
    const db = await connectDB();
    const companyCollection = db.collection('companies');
    try {
        const data = await request.json()
        const query = {_id : new ObjectId(data._id)}
        const oparation = {
            $set : {
                name : data.name,
                description : data.description,
                address : data.address,
                website : data.website,
                logo : data.logo
            }
        }
        const upsert = {upsert : true}
        const result = await companyCollection.updateOne(query, oparation, upsert);
        console.log(result);
        return NextResponse.json({message : 'Information update successfully', result, status : 200, success : true})
    } catch (error) {
        return NextResponse.json({message : 'something went wrong', status : 500, success : false})
    }
}