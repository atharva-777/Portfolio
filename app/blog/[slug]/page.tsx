import { blog } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 3600;

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == $slug][0]`;
  return client.fetch<blog | null>(query, { slug });
}

export async function generateStaticParams() {
  const query = `*[_type == 'blog' && defined(slug.current)]{"slug": slug.current}`;
  return client.fetch<Array<{ slug: string }>>(query);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getData(slug);

  if (!data) return { title: "Article not found" };

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      type: "article",
      title: data.title,
      description: data.description,
      publishedTime: data._createdAt,
    },
  };
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getData(slug);

  if (!data) notFound();

  const PortableTextComponent: PortableTextComponents<blog["content"][number]> = {
    types: {
      image: ({ value }) => (
        <Image
          src={urlFor(value).url()}
          alt={value.alt ?? ""}
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <main id="main-content" className="article-page content-width">
      <article>
        <header className="article-header">
          <Link className="text-link" href="/blog">← All notes</Link>
          <p><time dateTime={data._createdAt}>{new Date(data._createdAt).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}</time></p>
          <h1>{data.title}</h1>
          <p className="article-summary">{data.description}</p>
        </header>
        <div className="article-content">
          <PortableText value={data.content} components={PortableTextComponent} />
        </div>
      </article>
    </main>
  );
}