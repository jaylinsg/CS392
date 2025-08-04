/* eslint-disable @typescript-eslint/no-explicit-any */
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import clientPromise from "@/db";

export async function GET(
  req: NextRequest,
  context: any
) {
  const alias = context.params.alias;

  const client = await clientPromise;
  const db = client.db("shortener");
  const collection = db.collection("urls");

  const result = await collection.findOne({ alias });

  if (result && result.url) {
    redirect(result.url);
  } else {
    return new Response("Alias not found", { status: 404 });
  }
}
