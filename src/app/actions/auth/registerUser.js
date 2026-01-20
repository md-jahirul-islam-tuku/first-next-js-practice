"use server";
import { dbConnect } from "@/app/lib/dbConnect";

export default async function registerUser(payLoad) {
  try {
    const result = await dbConnect("testUser").insertOne(payLoad);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (err) {
    console.log(err);
    return null;
  }
}
