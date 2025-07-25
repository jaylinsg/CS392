import PostPreview from "@/components/PostPreview";
import PostsDisplay from "@/components/PostsDisplay";
import getAllPosts from "@/lib/getAllPosts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col items-center bg-blue-200 p-4">
      <PostsDisplay
        inputPosts={posts}
      />
      <PostPreview
        post={{
          id: "id2",
          title: "Sample Post 2",
          content: "This is another sample post content.",
          upvotes: 500,
          downvotes: 31,
        }}
      />
    </div>
  );
}