import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    return new NextResponse(JSON.stringify([111222,334455]), {status: 200})
}