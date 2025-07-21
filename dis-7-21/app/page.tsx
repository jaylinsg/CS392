import PostPreview from "@/components/PostPreview";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-blue-200 p-4">
      <PostPreview
        post={{
          id: "id",
          title: "Sample Post",
          content: "This is a sample post content.",
          upvotes: 100,
          downvotes: 31,
        }}
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