import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  console.log(typeof request);
  console.log(request);

  return new NextResponse("Hello");
}
