"use client";
import createNewPost from "@/lib/createNewPost";
import { PostProps } from "@/types";
import { Textarea } from "@mui/joy";
import { Button, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";

export default function NewPostForm({
    append,
}: {
    append: (post: PostProps) => void;
}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <form
            className="w-96 rounded-x1 bg-sky-400"
            onSubmit={async (event) => {
                event.preventDefault();
                createNewPost(title, content)
                    .then((newPost) => append(newPost))
                    .catch((err) => console.error(err))
            }}>
            <TextField
                variant="filled"
                sx={{ backgroundColor: "white", width: "100%" }}
                placeholder="Add a title"
            />
            <Textarea
                sx={{
                    padding: "0.5rem",
                    height: "100px",
                    widht: "100%",
                    borderRadius: 0,
                }}
                variant="soft"
                placeholder="Write your post content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <FormHelperText>
                What&apos;s on your mind?
            </FormHelperText>
            <div className="w-full flex justify-center">
                <Button
                    sx={{ width: "80%" }}
                    variant="contained"
                    type="submit"
                    disabled={title === "" || content === ""}
                >
                    Create Post
                </Button>
            </div>
        </form>
    );
}