import { NextResponse } from 'next/server';

export async function POST(request) {

  try {
    const data = await request.json(); 
    console.log('Received Data:', data);
    
    
    return NextResponse.json({ message: 'Data received successfully', data });
  } catch (error) {
    return NextResponse.json({ message: 'Error receiving data', error: error.message }, { status: 500 });
  }
}
