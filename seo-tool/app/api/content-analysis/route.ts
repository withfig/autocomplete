import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { removeStopwords } from 'stopword';

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

    // Analyze heading structure
    const headingStructure = [] as Array<{ level: string; text: string; order: number }>;
    let order = 0;

    $('h1, h2, h3, h4, h5, h6').each((_, el) => {
      const tagName = el.tagName.toLowerCase();
      const text = $(el).text().trim();
      if (text) {
        headingStructure.push({
          level: tagName,
          text,
          order: order++,
        });
      }
    });

    // Count headings by level
    const headingCounts = {
      h1: $('h1').length,
      h2: $('h2').length,
      h3: $('h3').length,
      h4: $('h4').length,
      h5: $('h5').length,
      h6: $('h6').length,
    };

    // Extract and analyze body text
    $('script, style, nav, footer, header, aside').remove();
    const bodyText = $('body').text().replace(/\s+/g, ' ').trim();
    
    // Word count
    const words = bodyText.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Character count
    const characterCount = bodyText.length;
    const characterCountNoSpaces = bodyText.replace(/\s/g, '').length;

    // Sentence count (approximate)
    const sentences = bodyText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = sentences.length;

    // Average words per sentence
    const avgWordsPerSentence = sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0;

    // Extract keywords (most common words, excluding stopwords)
    const cleanWords = words
      .map(word => word.toLowerCase().replace(/[^a-z0-9]/g, ''))
      .filter(word => word.length > 2);

    const wordsWithoutStopwords = removeStopwords(cleanWords);

    // Count word frequency
    const wordFrequency: Record<string, number> = {};
    wordsWithoutStopwords.forEach(word => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });

    // Get top keywords
    const topKeywords = Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / wordCount) * 100).toFixed(2) + '%',
      }));

    // Analyze paragraphs
    const paragraphs = $('p').length;
    const avgWordsPerParagraph = paragraphs > 0 ? Math.round(wordCount / paragraphs) : 0;

    // Analyze images
    const totalImages = $('img').length;
    const imagesWithAlt = $('img[alt]').filter((_, el) => $(el).attr('alt')?.trim()).length;
    const imagesWithoutAlt = totalImages - imagesWithAlt;

    // Analyze links
    const totalLinks = $('a[href]').length;
    const baseUrl = new URL(url);
    let internalLinks = 0;
    let externalLinks = 0;

    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      if (href) {
        try {
          const linkUrl = new URL(href, url);
          if (linkUrl.hostname === baseUrl.hostname) {
            internalLinks++;
          } else {
            externalLinks++;
          }
        } catch {
          // Invalid URL
        }
      }
    });

    // Reading time estimate (average 200 words per minute)
    const readingTimeMinutes = Math.ceil(wordCount / 200);

    // SEO recommendations
    const recommendations = [];
    if (headingCounts.h1 === 0) {
      recommendations.push('Add an H1 heading to your page');
    } else if (headingCounts.h1 > 1) {
      recommendations.push('Consider using only one H1 heading per page');
    }
    if (wordCount < 300) {
      recommendations.push('Content is quite short. Consider adding more content (aim for 300+ words)');
    }
    if (imagesWithoutAlt > 0) {
      recommendations.push(`${imagesWithoutAlt} image(s) missing alt text. Add alt text for better SEO and accessibility`);
    }
    if (topKeywords.length === 0) {
      recommendations.push('No significant keywords found. Add more relevant content');
    }

    return NextResponse.json({
      url,
      headingStructure,
      headingCounts,
      content: {
        wordCount,
        characterCount,
        characterCountNoSpaces,
        sentenceCount,
        paragraphCount: paragraphs,
        avgWordsPerSentence,
        avgWordsPerParagraph,
        readingTimeMinutes,
      },
      keywords: topKeywords,
      images: {
        total: totalImages,
        withAlt: imagesWithAlt,
        withoutAlt: imagesWithoutAlt,
      },
      links: {
        total: totalLinks,
        internal: internalLinks,
        external: externalLinks,
      },
      recommendations,
    });
  } catch (error: any) {
    console.error('Content analysis error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to analyze content' },
      { status: 500 }
    );
  }
}
