import { blogData } from '@/lib/portfolio-data'

// Shim for MetadataRoute if 'next' types are missing
type MetadataRoute = {
  Sitemap: Array<{
    url: string
    lastModified?: string | Date
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
  }>
}
 
export default function sitemap(): MetadataRoute['Sitemap'] {
  const baseUrl = 'https://abhay-krishnan.vercel.app'
  
  const blogEntries = blogData.posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...blogEntries,
  ]
}
