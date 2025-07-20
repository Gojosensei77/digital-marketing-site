import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const PostHeader = styled.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #e2e8f0;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`;

const CategoryTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: inline-block;
`;

const PostTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #e2e8f0;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ShareSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  span {
    color: #e2e8f0;
    font-size: 0.875rem;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const PostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ArticleContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const MarkdownContent = styled.div`
  line-height: 1.7;
  color: #374151;
  
  h1, h2, h3, h4, h5, h6 {
    color: #1a1a1a;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  h1 {
    font-size: 2rem;
    border-bottom: 2px solid #e2e8f0;
    padding-bottom: 0.5rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.25rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
  }
  
  li {
    margin: 0.5rem 0;
  }
  
  blockquote {
    border-left: 4px solid #0A84FF;
    padding-left: 1.5rem;
    margin: 2rem 0;
    color: #64748b;
    font-style: italic;
    background: #f8fafc;
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
  }
  
  code {
    background: #f8fafc;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 0.875rem;
    color: #e53e3e;
  }
  
  pre {
    background: #1a1a1a;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;
    
    code {
      background: none;
      color: inherit;
      padding: 0;
    }
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    
    th, td {
      border: 1px solid #e2e8f0;
      padding: 0.75rem;
      text-align: left;
    }
    
    th {
      background: #f8fafc;
      font-weight: 600;
    }
  }
  
  strong {
    font-weight: 600;
    color: #1a1a1a;
  }
  
  a {
    color: #0A84FF;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
`;

const TagItem = styled.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RelatedPosts = styled.section`
  background: #f8fafc;
  padding: 3rem 0;
`;

const RelatedContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const RelatedHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const RelatedCard = styled(Link)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const RelatedImage = styled.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const RelatedCardContent = styled.div`
  padding: 1.5rem;
`;

const RelatedCategory = styled.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
`;

const RelatedTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
`;

const RelatedExcerpt = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
`;

function PostDetail() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  const shareUrl = window.location.href;
  const shareTitle = post.title;
  
  return (
    <PageContainer>
      <PostHeader>
        <HeaderContent>
          <BackButton to="/blog">
            <ArrowLeft size={20} />
            Back to Blog
          </BackButton>
          
          <CategoryTag>{post.category}</CategoryTag>
          <PostTitle>{post.title}</PostTitle>
          
          <PostMeta>
            <MetaItem>
              <User size={16} />
              {post.author}
            </MetaItem>
            <MetaItem>
              <Calendar size={16} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </MetaItem>
            <MetaItem>
              <Clock size={16} />
              {post.readTime} read
            </MetaItem>
          </PostMeta>
          
          <ShareSection>
            <span>Share this article:</span>
            <ShareButtons>
              <ShareButton 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={18} />
              </ShareButton>
              <ShareButton 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </ShareButton>
              <ShareButton 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </ShareButton>
            </ShareButtons>
          </ShareSection>
        </HeaderContent>
      </PostHeader>
      
      <PostContent>
        <ArticleContent>
          <MarkdownContent>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </MarkdownContent>
        </ArticleContent>
        
        <PostTags>
          {post.tags.map(tag => (
            <TagItem key={tag}>
              <Tag size={14} />
              {tag}
            </TagItem>
          ))}
        </PostTags>
      </PostContent>
      
      {relatedPosts.length > 0 && (
        <RelatedPosts>
          <RelatedContent>
            <RelatedHeader>Related Articles</RelatedHeader>
            <RelatedGrid>
              {relatedPosts.map(relatedPost => (
                <RelatedCard key={relatedPost.id} to={`/post/${relatedPost.id}`}>
                  <RelatedImage>
                    {relatedPost.category === 'Analysis' ? '📈' :
                     relatedPost.category === 'Guide' ? '📖' :
                     relatedPost.category === 'Security' ? '🛡️' :
                     relatedPost.category === 'Technology' ? '⚙️' :
                     relatedPost.category === 'NFTs' ? '🎨' :
                     '₿'}
                  </RelatedImage>
                  <RelatedCardContent>
                    <RelatedCategory>{relatedPost.category}</RelatedCategory>
                    <RelatedTitle>{relatedPost.title}</RelatedTitle>
                    <RelatedExcerpt>
                      {relatedPost.excerpt.substring(0, 120)}...
                    </RelatedExcerpt>
                  </RelatedCardContent>
                </RelatedCard>
              ))}
            </RelatedGrid>
          </RelatedContent>
        </RelatedPosts>
      )}
    </PageContainer>
  );
}

export default PostDetail;