import { PostProps } from "@/types";

export default function PostPreview({ post }: { post: PostProps }) {
    return (
        <div className="bg-sky-400 rounded-xl p-4 m-2 w-96">
            <h2 className="font-bold text-3x1">Title: {post.title}</h2>
            <h4 className="font-bold text-3x1">Content: {post.content}</h4>
            <p>Score: {post.upvotes - post.downvotes}</p>
        </div>
    );
}