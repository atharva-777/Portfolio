import { client } from "../lib/sanity";
import { NextResponse } from "next/server";
export async function GET() {
  const query = `*[_type=='blog']`;

  try {
    const data = await client.fetch(query);
    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unexpected server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
