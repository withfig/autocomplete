import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { keyword } = await request.json();

    if (!keyword) {
      return NextResponse.json(
        { error: 'Keyword is required' },
        { status: 400 }
      );
    }

    const cleanKeyword = keyword.trim().toLowerCase();

    // Generate related keywords using various strategies
    const relatedKeywords = new Set<string>();

    // 1. Question-based keywords
    const questionWords = ['what', 'how', 'why', 'when', 'where', 'who', 'which'];
    questionWords.forEach(q => {
      relatedKeywords.add(`${q} is ${cleanKeyword}`);
      relatedKeywords.add(`${q} ${cleanKeyword}`);
    });

    // 2. Modifier-based keywords
    const modifiers = [
      'best', 'top', 'free', 'online', 'guide', 'tutorial', 'tips',
      'examples', 'tools', 'software', 'services', 'solutions',
      'benefits', 'advantages', 'features', 'review', 'comparison',
      'vs', 'alternative', 'cheap', 'affordable', 'professional'
    ];
    modifiers.forEach(mod => {
      relatedKeywords.add(`${mod} ${cleanKeyword}`);
      relatedKeywords.add(`${cleanKeyword} ${mod}`);
    });

    // 3. Action-based keywords
    const actions = [
      'learn', 'buy', 'get', 'find', 'use', 'create', 'make',
      'build', 'develop', 'improve', 'optimize', 'increase'
    ];
    actions.forEach(action => {
      relatedKeywords.add(`${action} ${cleanKeyword}`);
      relatedKeywords.add(`how to ${action} ${cleanKeyword}`);
    });

    // 4. Time-based keywords
    const timeModifiers = ['2024', '2025', 'latest', 'new', 'updated', 'modern'];
    timeModifiers.forEach(time => {
      relatedKeywords.add(`${cleanKeyword} ${time}`);
    });

    // 5. Location-based keywords (generic)
    const locations = ['near me', 'online', 'local', 'remote'];
    locations.forEach(loc => {
      relatedKeywords.add(`${cleanKeyword} ${loc}`);
    });

    // 6. Comparison keywords
    relatedKeywords.add(`${cleanKeyword} vs`);
    relatedKeywords.add(`${cleanKeyword} comparison`);
    relatedKeywords.add(`${cleanKeyword} alternatives`);
    relatedKeywords.add(`${cleanKeyword} competitors`);

    // 7. Problem-solving keywords
    relatedKeywords.add(`${cleanKeyword} problems`);
    relatedKeywords.add(`${cleanKeyword} solutions`);
    relatedKeywords.add(`${cleanKeyword} troubleshooting`);
    relatedKeywords.add(`${cleanKeyword} help`);

    // 8. Educational keywords
    relatedKeywords.add(`${cleanKeyword} course`);
    relatedKeywords.add(`${cleanKeyword} training`);
    relatedKeywords.add(`${cleanKeyword} certification`);
    relatedKeywords.add(`${cleanKeyword} for beginners`);

    // 9. Commercial keywords
    relatedKeywords.add(`${cleanKeyword} price`);
    relatedKeywords.add(`${cleanKeyword} cost`);
    relatedKeywords.add(`${cleanKeyword} pricing`);
    relatedKeywords.add(`${cleanKeyword} discount`);
    relatedKeywords.add(`${cleanKeyword} coupon`);

    // 10. Long-tail variations
    relatedKeywords.add(`best ${cleanKeyword} for beginners`);
    relatedKeywords.add(`how to choose ${cleanKeyword}`);
    relatedKeywords.add(`${cleanKeyword} step by step guide`);
    relatedKeywords.add(`complete guide to ${cleanKeyword}`);

    // Convert to array and categorize
    const keywordArray = Array.from(relatedKeywords);

    // Categorize keywords
    const categorized = {
      questions: keywordArray.filter(k => 
        questionWords.some(q => k.startsWith(q))
      ),
      howTo: keywordArray.filter(k => k.includes('how to')),
      commercial: keywordArray.filter(k => 
        ['buy', 'price', 'cost', 'pricing', 'discount', 'coupon', 'cheap', 'affordable'].some(w => k.includes(w))
      ),
      informational: keywordArray.filter(k => 
        ['guide', 'tutorial', 'tips', 'examples', 'learn', 'what', 'why'].some(w => k.includes(w))
      ),
      comparison: keywordArray.filter(k => 
        ['vs', 'comparison', 'alternative', 'review'].some(w => k.includes(w))
      ),
      local: keywordArray.filter(k => 
        ['near me', 'local'].some(w => k.includes(w))
      ),
    };

    // Calculate estimated metrics (simulated)
    const keywordsWithMetrics = keywordArray.slice(0, 50).map(kw => ({
      keyword: kw,
      searchVolume: Math.floor(Math.random() * 10000) + 100,
      difficulty: Math.floor(Math.random() * 100),
      cpc: (Math.random() * 5).toFixed(2),
    })).sort((a, b) => b.searchVolume - a.searchVolume);

    return NextResponse.json({
      seedKeyword: cleanKeyword,
      totalGenerated: keywordArray.length,
      keywords: keywordsWithMetrics,
      categorized: {
        questions: categorized.questions.slice(0, 10),
        howTo: categorized.howTo.slice(0, 10),
        commercial: categorized.commercial.slice(0, 10),
        informational: categorized.informational.slice(0, 10),
        comparison: categorized.comparison.slice(0, 10),
        local: categorized.local.slice(0, 10),
      },
      suggestions: {
        longTail: keywordArray.filter(k => k.split(' ').length >= 4).slice(0, 10),
        shortTail: keywordArray.filter(k => k.split(' ').length <= 2).slice(0, 10),
      },
    });
  } catch (error: any) {
    console.error('Keyword generation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate keywords' },
      { status: 500 }
    );
  }
}
