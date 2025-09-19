import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client"; 
import { urlFor } from "@/sanity/lib/image";

export default async function BlogCards() {
  // fetch multiple posts
  const query = `*[_type == "post"] | order(publishedAt desc)[0...6]{
    _id,
    title,
    slug,
    excerpt,
    mainImage
  }`;
  const posts = await client.fetch(query);

  if (!posts.length) {
    return <p>No posts found.</p>;
  }

interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: SanityImage;
}

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
  {posts.map((post: Post) => (
        <div
          key={post._id}
          className="rounded overflow-hidden border border-neutral-200 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
        >
          {post.mainImage && (
            <Image
              src={urlFor(post.mainImage).width(600).height(400).url()}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover object-left-top"
            />
          )}
          <div className="p-4 flex flex-col flex-grow">
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-neutral-600 line-clamp-3 flex-grow">
              {post.excerpt || "No excerpt available."}
            </p>
            {post.slug?.current && (
              <Link
                href={`/post/${post.slug.current}`}
                className="text-blue-600 text-sm font-medium mt-3 hover:underline"
              >
                Read more →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
