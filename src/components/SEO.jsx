import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({
  title = 'CryptoBlog - Cryptocurrency News & Analysis',
  description = 'CryptoBlog: trusted cryptocurrency news, analysis, and insights.',
  keywords = 'cryptocurrency, bitcoin, ethereum, blockchain, crypto news, trading',
  url = 'https://example.com',
  image = '/social-banner.png',
  noindex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  authorName
}) {
  const canonicalUrl = url;
  const metaRobots = noindex ? 'noindex, nofollow' : 'index, follow';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebSite',
    name: title,
    description,
    url: canonicalUrl,
    image: image && (image.startsWith('http') ? image : `${image}`),
    ...(type === 'article'
      ? {
          headline: title,
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          author: authorName ? { '@type': 'Person', name: authorName } : undefined
        }
      : {
          potentialAction: {
            '@type': 'SearchAction',
            target: `${canonicalUrl}/blog?search={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        })
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={metaRobots} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}

export default SEO;