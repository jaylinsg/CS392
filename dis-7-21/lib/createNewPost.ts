"use server";
import { PostProps } from "@/types";

export default async function createNewPost(title: string, content: string): Promise<PostProps> {
    console.log("creating new post");
    const p = {
        title:      title,
        content:    content,
        upvotes:    0,
        downvotes:  0,
    }

    return { ...p, id: "newId" };
}