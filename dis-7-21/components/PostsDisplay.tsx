"use client";

import { PostProps } from "@/types";
import { useState } from "react";
import PostPreview from "./PostPreview";
import NewPostForm from "./NewPostForm";

export default function PostDisplay({ 
    inputPosts,
}: { 
    inputPosts: PostProps[]; 
}) {
    const [posts, setPosts] = useState(inputPosts);

    return (
        <div className="flex flex-col items-center">
            <NewPostForm />
            {posts.map((p) => (
                <PostPreview key={p.id} post={p} />
            ))}
        </div>
    );
}

