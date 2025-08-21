// Auto-generated digital marketing posts. In a real setup, this could be fetched
// from an API or generated server-side. Here we produce static entries at build time.

const baseImage = `${import.meta.env.BASE_URL || '/'}hero-illustration.svg`;

const lorem = (title) => `# ${title}

In this article, we explore practical strategies, frameworks, and checklists you can apply today to improve your digital marketing performance.

## Key Takeaways
- Audience research and ICP definition are prerequisites for effective campaigns
- Content-market fit beats channel hacks over the long term
- Measurement, experimentation, and iteration drive compounding ROI

## Action Plan
1. Define your goals, KPIs, and guardrails
2. Map funnel stages to content and channels
3. Launch minimum-viable campaigns with clear hypotheses
4. Measure, learn, iterate, and scale winners
`;

export function generateMarketingPosts(startId = 1000) {
  const topics = [
    ['SEO Content Strategy for 2025', 'SEO'],
    ['Building a Full-Funnel Content Calendar', 'Content'],
    ['High-ROI PPC Campaign Structures', 'PPC'],
    ['LinkedIn Organic: B2B Playbook', 'Social'],
    ['Email Automation for Lead Nurture', 'Email'],
    ['CRO: Landing Page Templates That Convert', 'CRO'],
    ['Attribution Simplified for Small Teams', 'Analytics'],
    ['GA4 Dashboards That Matter', 'Analytics'],
    ['Repurposing Content Across Channels', 'Content'],
    ['TikTok Ads for Lead Gen', 'Social']
  ];

  return topics.map(([title, category], index) => {
    const id = startId + index;
    return {
      id,
      title,
      excerpt: `Practical guide: ${title}. Frameworks, checklists, and examples to execute now.`,
      content: lorem(title),
      author: 'Marketing Team',
      date: '2025-01-01',
      category,
      tags: [category, 'Digital Marketing'],
      readTime: `${6 + (index % 4)} min`,
      image: baseImage
    };
  });
}

