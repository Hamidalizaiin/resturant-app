import { NextResponse } from 'next/server';
import { sql } from "@vercel/postgres";

export async function GET() {
  const { rows } = await sql`SELECT * from food_items`;
  return NextResponse.json(rows);
}
