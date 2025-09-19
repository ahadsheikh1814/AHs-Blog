import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { singlePostQuery } from "@/sanity/lib/sanity.queries";
import Image from "next/image";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await client.fetch(singlePostQuery, { slug });

  if (!post) {
    return <div className="p-8">Post not found.</div>;
  }

  return (
    <article className="mx-20 my-5 relative">
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-neutral-500 mb-6">
        By {post.author || "Unknown"} •{" "}
        {post.publishedAt && new Date(post.publishedAt).toDateString()}
      </p>

      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).width(1200).url()}
          alt={post.title}
          width={1200}
          height={1200}
          className="w-2/3 max-h-[50vh] object-cover object-center rounded-lg mb-8"
        />
      )}

      <div className="max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
