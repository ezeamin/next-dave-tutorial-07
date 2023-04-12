import { NextResponse } from 'next/server';

interface Feedback {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  // request.json() is like request.body() from express
  const data: Feedback = await request.json();
  const { name, email, message } = data;

  // work with data

  return NextResponse.json({ name, email, message });
}
