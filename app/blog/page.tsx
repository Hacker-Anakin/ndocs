import Link from 'next/link';

const posts = [
  { slug: 'introduction-to-neit', title: '1. Introduction to Neit' },
  { slug: 'neit-requirements', title: '2. Neit Requirements' },
  { slug: 'neit-cli', title: '3. Neit Command-Line Interface' },
  { slug: 'neit-syntax', title: '4. Neit Syntax' },
  { slug: 'functions-in-neit', title: '5. Functions (Commands)' },
  { slug: 'control-flow', title: '6. Control Flow' },
  { slug: 'semigen-grammar', title: '7. Semigen Grammar' },
];

export default function BlogPage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
      <ul className="space-y-2">
      {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
