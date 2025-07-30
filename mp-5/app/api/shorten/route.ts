import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/db";

function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export async function POST(req: NextRequest) {
    const { url, alias } = await req.json();

    if (!url || !alias) {
        return NextResponse.json({ error: "Missing url or alias" }, { status: 400 });
    }

    if (!isValidUrl(url)) {
        return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    try {
        const client = await clientPromise;
        const db = client.db("shortener");
        const collection = db.collection("urls");

        // Check if alias already exists
        const existing = await collection.findOne({ alias });
        if (existing) {
            return NextResponse.json({ error: "Alias already taken" }, { status: 409 });
        }

        // Insert the new alias-url pair
        await collection.insertOne({ alias, url });

        return NextResponse.json({ message: "Shortened URL created successfully" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
