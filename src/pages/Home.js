import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight, TrendingUp, Shield, BookOpen, Clock, User } from 'lucide-react';
import { blogPosts, featuredPost } from '../data/blogPosts';

const PageContainer = styled.div`
  padding-top: 80px; /* Account for fixed navbar */
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/hero-illustration.svg') center/cover no-repeat;
    opacity: 0.1;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #e2e8f0;
    line-height: 1.6;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #FF5A5F 0%, #FFD600 100%);
  color: #1a1a1a;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 90, 95, 0.3);
  }
`;

const SecondaryButton = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const FeaturedSection = styled.section`
  padding: 5rem 0;
  background: #f8fafc;
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
  
  p {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FeaturedCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedImage = styled.div`
  background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 100%);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

const FeaturedContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CategoryTag = styled.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  width: fit-content;
`;

const FeaturedTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const FeaturedExcerpt = styled.p`
  color: #64748b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: #64748b;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ReadMoreButton = styled(Link)`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
`;

const RecentPostsSection = styled.section`
  padding: 5rem 0;
  background: white;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PostCard = styled(Link)`
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

const PostCardImage = styled.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const PostCardContent = styled.div`
  padding: 1.5rem;
`;

const PostCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
`;

const PostCardExcerpt = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const StatsSection = styled.section`
  background: #1a1a1a;
  color: white;
  padding: 4rem 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const StatCard = styled.div`
  padding: 1.5rem;
  
  .icon {
    margin-bottom: 1rem;
    color: #0A84FF;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #0A84FF;
  }
  
  p {
    color: #94a3b8;
  }
`;

function Home() {
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <PageContainer>
      <Hero>
        <HeroContent>
          <HeroText>
            <h1>Navigate the <span className="text-gradient">Crypto World</span> with Confidence</h1>
            <p>
              Get expert insights, market analysis, and educational content to make informed 
              decisions in the rapidly evolving cryptocurrency landscape.
            </p>
            <HeroButtons>
              <PrimaryButton to="/blog">
                Explore Articles
                <ArrowRight size={20} />
              </PrimaryButton>
              <SecondaryButton to="/about">
                Learn More
              </SecondaryButton>
            </HeroButtons>
          </HeroText>
          <div>
            <FeaturedImage style={{ borderRadius: '16px', fontSize: '4rem' }}>
              ₿
            </FeaturedImage>
          </div>
        </HeroContent>
      </Hero>

      <FeaturedSection>
        <SectionContainer>
          <SectionHeader>
            <h2>Featured Article</h2>
            <p>
              Deep dive into our latest comprehensive analysis and insights
            </p>
          </SectionHeader>
          
          <FeaturedCard>
            <FeaturedImage>
              <TrendingUp size={80} />
            </FeaturedImage>
            <FeaturedContent>
              <CategoryTag>{featuredPost.category}</CategoryTag>
              <FeaturedTitle>{featuredPost.title}</FeaturedTitle>
              <PostMeta>
                <MetaItem>
                  <User size={16} />
                  {featuredPost.author}
                </MetaItem>
                <MetaItem>
                  <Clock size={16} />
                  {featuredPost.readTime}
                </MetaItem>
              </PostMeta>
              <FeaturedExcerpt>{featuredPost.excerpt}</FeaturedExcerpt>
              <ReadMoreButton to={`/post/${featuredPost.id}`}>
                Read Full Article
                <ArrowRight size={16} />
              </ReadMoreButton>
            </FeaturedContent>
          </FeaturedCard>
        </SectionContainer>
      </FeaturedSection>

      <RecentPostsSection>
        <SectionContainer>
          <SectionHeader>
            <h2>Latest Insights</h2>
            <p>
              Stay updated with the latest trends, analysis, and guides in the crypto space
            </p>
          </SectionHeader>
          
          <PostsGrid>
            {recentPosts.map((post) => (
              <PostCard key={post.id} to={`/post/${post.id}`}>
                <PostCardImage>
                  {post.category === 'Guide' ? <BookOpen size={60} /> : 
                   post.category === 'Security' ? <Shield size={60} /> : 
                   <TrendingUp size={60} />}
                </PostCardImage>
                <PostCardContent>
                  <CategoryTag>{post.category}</CategoryTag>
                  <PostCardTitle>{post.title}</PostCardTitle>
                  <PostCardExcerpt>{post.excerpt.substring(0, 120)}...</PostCardExcerpt>
                  <PostMeta>
                    <MetaItem>
                      <Clock size={14} />
                      {post.readTime}
                    </MetaItem>
                    <MetaItem>
                      <User size={14} />
                      {post.author}
                    </MetaItem>
                  </PostMeta>
                </PostCardContent>
              </PostCard>
            ))}
          </PostsGrid>
        </SectionContainer>
      </RecentPostsSection>

      <StatsSection>
        <SectionContainer>
          <StatsGrid>
            <StatCard>
              <div className="icon">
                <BookOpen size={48} />
              </div>
              <h3>50+</h3>
              <p>In-depth Articles</p>
            </StatCard>
            <StatCard>
              <div className="icon">
                <TrendingUp size={48} />
              </div>
              <h3>10K+</h3>
              <p>Monthly Readers</p>
            </StatCard>
            <StatCard>
              <div className="icon">
                <Shield size={48} />
              </div>
              <h3>100%</h3>
              <p>Trusted Content</p>
            </StatCard>
            <StatCard>
              <div className="icon">
                <User size={48} />
              </div>
              <h3>5+</h3>
              <p>Expert Authors</p>
            </StatCard>
          </StatsGrid>
        </SectionContainer>
      </StatsSection>
    </PageContainer>
  );
}

export default Home;