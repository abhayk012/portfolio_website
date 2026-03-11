// Shim for MetadataRoute if 'next' types are missing
type MetadataRoute = {
  Robots: {
    rules: {
      userAgent?: string | string[]
      allow?: string | string[]
      disallow?: string | string[]
      crawlDelay?: number
    } | Array<{
      userAgent: string | string[]
      allow?: string | string[]
      disallow?: string | string[]
      crawlDelay?: number
    }>
    sitemap?: string | string[]
    host?: string
  }
}
 
export default function robots(): MetadataRoute['Robots'] {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://abhay-krishnan.vercel.app/sitemap.xml',
  }
}
