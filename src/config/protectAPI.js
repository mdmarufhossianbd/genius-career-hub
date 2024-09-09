import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function checkAdmin(request) {
    const session = await getServerSession(authOptions)
    if(!session || session.user.role !== 'admin'){
      return NextResponse.json({
        message : "Unauthorized Access",
        status : 401
      })
    }
    return null 
}