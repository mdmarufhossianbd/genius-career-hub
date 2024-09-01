import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function POST (request){
  const data = await request.formData();
  const file = data.get('companyLogo')
  console.log(file);
  if(!file){
    return NextResponse.json({message : "Please select a image"}, {status : 400}, {success : false})
  }
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const fileExtension = path.extname(file.name);
  const baseName = path.basename(file.name, fileExtension)
  const fileName = `${baseName}_${Date.now()}${fileExtension}`
  
  const uploadDir = path.join(process.cwd(), 'public/uploads');
  const filePath = path.join(uploadDir, fileName);
  await writeFile(filePath, buffer)
  const imageURL = `/uploads/${fileName}`;
  const imagData = {
    message : "Image upload successfully",
    imageURL,
    status : 200,
    success : true
  }
  return NextResponse.json(imagData)
}