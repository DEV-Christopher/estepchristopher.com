import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly welcome AI crawlers — llms.txt at the site root gives them a summary
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'CCBot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://estepchristopher.com/sitemap.xml',
  }
}
