import { NextResponse } from 'next/server';

// without request obj, this function is statically analyzed
// always responds on the same way
export async function GET() {
  return NextResponse.json({
    message: 'Hello World',
  });
}
