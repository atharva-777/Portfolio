import type { MetadataRoute } from 'next'
import { client } from './lib/sanity'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (!siteUrl) return []

  const posts = await client.fetch<Array<{ slug: string; updatedAt: string }>>(
    `*[_type == 'blog' && defined(slug.current)]{"slug": slug.current, "updatedAt": _updatedAt}`,
  )

  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}