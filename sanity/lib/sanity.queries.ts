// lib/sanity.queries.ts
export const singlePostQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    mainImage,
    publishedAt,
    "author": author->name,
    body
  }
`;
