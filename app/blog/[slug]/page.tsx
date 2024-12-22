interface BlogPostProps {
  params: {
    slug: string;
  };
}

const blogPosts: Record<string, string> = {
  "introduction-to-neit":
    "Welcome to the Introduction to Neit. This article covers the basics of Neit.",
  "neit-requirements":
    "Neit Requirements: Here are the prerequisites for working with Neit.",
  "neit-cli":
    "The Neit CLI simplifies the coding process. Learn about its features here.",
  "neit-syntax": "Explore the syntax of Neit, designed for clarity and power.",
  "functions-in-neit":
    "Functions (Commands) in Neit: Learn how to define and use them.",
  "control-flow":
    "Control Flow in Neit: Manage your code execution efficiently.",
  "semigen-grammar":
    "Semigen Grammar: The backbone of Neit’s unique programming capabilities.",
};

export default function BlogPost({ params }: BlogPostProps) {
  const content = blogPosts[params.slug];

  if (!content) {
    return <p className="p-4 text-red-500">Post not found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {params.slug.replace(/-/g, " ")}
      </h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
