import { client } from "../lib/sanity";
import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  const query = `*[_type=='blog']`;

  try {
    const data = await client.fetch(query);
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
