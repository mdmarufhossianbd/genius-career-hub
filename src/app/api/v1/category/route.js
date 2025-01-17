import { checkAdmin } from '@/config/protectAPI';
import { connectDB } from '@/lib/connectDB';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';


export async function POST(request) {
    const isUnauthorized = await checkAdmin();
    if(isUnauthorized) {
      return isUnauthorized
    }
    const db = await connectDB();
    const categoriesCollection = db.collection("categories");
  try {
    const {categoryInfo} = await request.json();   
    const slug = categoryInfo?.slug;
    const existingSlug = await categoriesCollection.findOne({slug : slug});
    if(existingSlug){
        return NextResponse.json({ message: 'Slug is already used.', status: 406, success: false });       
    }

    const categoryName = categoryInfo.categoryName;
    const existingCategoryName = await categoriesCollection.findOne({categoryName : categoryName})

    if(existingCategoryName){
      return NextResponse.json({ message: 'Category name is already used.', status: 406, success: false });
    }

    const result = await categoriesCollection.insertOne(categoryInfo);
    return NextResponse.json({ message: 'Category added successfully', result, status: 200, success: true });

  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong', error: error.message }, { status: 500 });
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

export async function PATCH(request) {
  const isUnauthorized = await checkAdmin();
  if(isUnauthorized) {
    return isUnauthorized
  }
  const db = await connectDB();
  const categoriesCollection = db.collection('categories');
  try {
    const data = await request.json();
    const filter = {_id : new ObjectId(data._id)};
    const oparation = {
      $set : {
        categoryName : data.categoryName,
        description : data.description,
        slug : data.slug
      }
    }
    const result = await categoriesCollection.updateOne(filter, oparation)
    return NextResponse.json({message : 'Update successfully', result, status : 200, success : true})
  } catch (error) {
    return NextResponse.json({message : 'something went wrong', status : 500, success : false})
  }
}

export async function DELETE(request) {
  const isUnauthorized = await checkAdmin();
  if(isUnauthorized) {
    return isUnauthorized
  }
  const db = await connectDB();
  const categoriesCollection = db.collection('categories')
  try {
    const data = await request.json();
    const query = {_id : new ObjectId(data._id)};
    const result = await categoriesCollection.deleteOne(query)
    return NextResponse.json({message : 'Successfully deleted category', result, status : 200, success : true})
  } catch (error) {
    return NextResponse.json({message : 'Somthing went wrong', error : error.message}, {status : 500}, {success : false})
  }
}