import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      );
    }

    // Fetch the webpage
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      timeout: 10000,
    });

    const html = response.data;
    const $ = cheerio.load(html);

    // Extract meta tags
    const metaTags = {
      title: $('title').text() || '',
      description: $('meta[name="description"]').attr('content') || '',
      keywords: $('meta[name="keywords"]').attr('content') || '',
      ogTitle: $('meta[property="og:title"]').attr('content') || '',
      ogDescription: $('meta[property="og:description"]').attr('content') || '',
      ogImage: $('meta[property="og:image"]').attr('content') || '',
      twitterCard: $('meta[name="twitter:card"]').attr('content') || '',
      twitterTitle: $('meta[name="twitter:title"]').attr('content') || '',
      twitterDescription: $('meta[name="twitter:description"]').attr('content') || '',
      canonical: $('link[rel="canonical"]').attr('href') || '',
      robots: $('meta[name="robots"]').attr('content') || '',
    };

    // Extract all headings
    const headings = {
      h1: [] as string[],
      h2: [] as string[],
      h3: [] as string[],
      h4: [] as string[],
      h5: [] as string[],
      h6: [] as string[],
    };

    $('h1').each((_, el) => headings.h1.push($(el).text().trim()));
    $('h2').each((_, el) => headings.h2.push($(el).text().trim()));
    $('h3').each((_, el) => headings.h3.push($(el).text().trim()));
    $('h4').each((_, el) => headings.h4.push($(el).text().trim()));
    $('h5').each((_, el) => headings.h5.push($(el).text().trim()));
    $('h6').each((_, el) => headings.h6.push($(el).text().trim()));

    // Extract all links
    const links = {
      internal: [] as string[],
      external: [] as string[],
    };

    const baseUrl = new URL(url);
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      if (href) {
        try {
          const linkUrl = new URL(href, url);
          if (linkUrl.hostname === baseUrl.hostname) {
            links.internal.push(linkUrl.href);
          } else {
            links.external.push(linkUrl.href);
          }
        } catch {
          // Invalid URL, skip
        }
      }
    });

    // Extract images
    const images = [] as Array<{ src: string; alt: string }>;
    $('img').each((_, el) => {
      const src = $(el).attr('src');
      const alt = $(el).attr('alt') || '';
      if (src) {
        try {
          const imgUrl = new URL(src, url);
          images.push({ src: imgUrl.href, alt });
        } catch {
          // Invalid URL, skip
        }
      }
    });

    // Extract body text
    $('script, style, nav, footer, header').remove();
    const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
    const wordCount = bodyText.split(/\s+/).filter(word => word.length > 0).length;

    // Extract structured data
    const structuredData = [] as any[];
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const data = JSON.parse($(el).html() || '');
        structuredData.push(data);
      } catch {
        // Invalid JSON, skip
      }
    });

    return NextResponse.json({
      url,
      metaTags,
      headings,
      links: {
        internal: links.internal.length,
        external: links.external.length,
        internalLinks: links.internal.slice(0, 50), // Limit to first 50
        externalLinks: links.external.slice(0, 50),
      },
      images: {
        total: images.length,
        withAlt: images.filter(img => img.alt).length,
        withoutAlt: images.filter(img => !img.alt).length,
        list: images.slice(0, 20), // Limit to first 20
      },
      content: {
        wordCount,
        textPreview: bodyText.substring(0, 500),
      },
      structuredData,
      statusCode: response.status,
    });
  } catch (error: any) {
    console.error('Content audit error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to audit content' },
      { status: 500 }
    );
  }
}
