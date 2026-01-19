import { dbConnect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const result = await dbConnect("users").findOne({ _id: new ObjectId(id) });
  return Response.json(result);
}
export async function PATCH(req, { params }) {
  const { id } = await params;
  const data = await req.json();
  const result = await dbConnect("users").updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...data } },
  );
  return Response.json(result);
}
export async function DELETE(req, { params }) {
  const { id } = await params;
  const result = await dbConnect("users").deleteOne({ _id: new ObjectId(id) });
  return Response.json(result);
}
