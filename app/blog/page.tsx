import { client } from "../lib/sanity";
import Link from "next/link";
import type { blog } from "../lib/interface";

export const revalidate = 3600

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc)`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const posts = await getData() as blog[];

  return (
    <main id="main-content" className="journal-page section-wrap">
      <div className="content-width">
        <p className="section-index">FIELD NOTES <span>/ JOURNAL</span></p>
        <h1 className="section-title">Ideas from<br /><em>the workbench.</em></h1>
        <ul className="journal-list">
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <time dateTime={post._createdAt}>{new Date(post._createdAt).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
              <span><strong>{post.title}</strong><small>{post.description}</small></span>
              <span aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </main>
  );
}
