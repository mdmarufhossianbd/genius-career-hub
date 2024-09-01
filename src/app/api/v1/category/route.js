import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const db = await connectDB();
    const categoriesCollection = db.collection("categories");
  try {
    const data = await request.json(); 
    const categoryName = data?.categoryName;
    const existCategoryName = await categoriesCollection.find({categoryName : categoryName}).toArray();
    if(existCategoryName.length > 0){
        return NextResponse.json({ message: 'Already added this category.', status : false });       
    }
    await categoriesCollection.insertOne(data);
    return NextResponse.json({ message: 'Category added successfully', status : true });

  } catch (error) {
    return NextResponse.json({ message: 'Error receiving data', error: error.message }, { status: 500 });
  }
}

export async function GET () {
    const db = await connectDB();
    const categoriesCollection = db.collection("categories")
    try {
        const result = await categoriesCollection.find().toArray();
        return NextResponse.json({result}, {status : 200})
    } catch (error) {
        return NextResponse.json({ message: 'Error receiving data', error: error.message }, { status: 500 });
    }
}