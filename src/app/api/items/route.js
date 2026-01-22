import { dbConnect } from "@/app/lib/dbConnect";

export async function GET() {
  const result = await dbConnect("users").find({}).toArray();

  return Response.json(result);
}
export async function POST(req) {
  const postedData = await req.json();
  const result = await dbConnect("users").insertOne(postedData);
  return Response.json(result);
}
