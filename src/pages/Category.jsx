import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Clock, User, ArrowLeft, TrendingUp, Shield, BookOpen, Cpu, Palette } from 'lucide-react';
import { blogPosts, categories } from '../data/blogPosts';

const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const CategoryHeader = styled.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  
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

const CategoryIcon = styled.div`
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const CategoryTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CategoryDescription = styled.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  max-width: 600px;
  margin: 0 auto;
`;

const CategoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PostCard = styled(Link)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const PostImage = styled.div`
  background: linear-gradient(45deg, #0A84FF, #FF5A5F);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`;

const PostContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  line-height: 1.4;
`;

const PostExcerpt = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TagItem = styled.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #64748b;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1a1a1a;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const AllCategoriesButton = styled(Link)`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
`;

const PostCount = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  text-align: center;
`;

// Category descriptions and icons
const categoryData = {
  'Analysis': {
    icon: <TrendingUp size={40} />,
    description: 'In-depth market analysis, price predictions, and technical insights to help you understand crypto trends.'
  },
  'Guide': {
    icon: <BookOpen size={40} />,
    description: 'Step-by-step tutorials and comprehensive guides to help you navigate the crypto ecosystem.'
  },
  'Security': {
    icon: <Shield size={40} />,
    description: 'Essential security practices and tips to protect your crypto assets and stay safe in DeFi.'
  },
  'Technology': {
    icon: <Cpu size={40} />,
    description: 'Exploring the latest blockchain technologies, protocols, and innovations shaping the future.'
  },
  'NFTs': {
    icon: <Palette size={40} />,
    description: 'Everything about Non-Fungible Tokens, from art and collectibles to utility and market trends.'
  },
  'DeFi': {
    icon: <TrendingUp size={40} />,
    description: 'Decentralized Finance protocols, yield farming, liquidity mining, and DeFi strategies.'
  },
  'Trading': {
    icon: <TrendingUp size={40} />,
    description: 'Trading strategies, market analysis, and insights for both beginners and experienced traders.'
  },
  'News': {
    icon: <TrendingUp size={40} />,
    description: 'Latest cryptocurrency news, regulatory updates, and important developments in the industry.'
  }
};

function Category() {
  const { category } = useParams();
  
  // Check if category exists
  if (!categories.includes(category) && category !== 'All') {
    return <Navigate to="/blog" replace />;
  }
  
  // Filter posts by category
  const categoryPosts = blogPosts.filter(post => post.category === category);
  
  const categoryInfo = categoryData[category] || {
    icon: <TrendingUp size={40} />,
    description: `Explore articles in the ${category} category.`
  };

  return (
    <PageContainer>
      <CategoryHeader>
        <HeaderContent>
          <BackButton to="/blog">
            <ArrowLeft size={20} />
            Back to Blog
          </BackButton>
          
          <CategoryIcon>
            {categoryInfo.icon}
          </CategoryIcon>
          
          <CategoryTitle>{category}</CategoryTitle>
          <CategoryDescription>
            {categoryInfo.description}
          </CategoryDescription>
        </HeaderContent>
      </CategoryHeader>

      <CategoryContent>
        {categoryPosts.length > 0 ? (
          <>
            <PostCount>
              {categoryPosts.length} article{categoryPosts.length !== 1 ? 's' : ''} in {category}
            </PostCount>
            
            <PostsGrid>
              {categoryPosts.map(post => (
                <PostCard key={post.id} to={`/post/${post.id}`}>
                  <PostImage>
                    {category === 'Analysis' ? '📈' :
                     category === 'Guide' ? '📖' :
                     category === 'Security' ? '🛡️' :
                     category === 'Technology' ? '⚙️' :
                     category === 'NFTs' ? '🎨' :
                     category === 'DeFi' ? '🏦' :
                     category === 'Trading' ? '💹' :
                     category === 'News' ? '📰' :
                     '₿'}
                  </PostImage>
                  
                  <PostContent>
                    <PostTitle>{post.title}</PostTitle>
                    <PostExcerpt>{post.excerpt}</PostExcerpt>
                    
                    <PostMeta>
                      <MetaItem>
                        <User size={14} />
                        {post.author}
                      </MetaItem>
                      <MetaItem>
                        <Clock size={14} />
                        {post.readTime}
                      </MetaItem>
                    </PostMeta>
                    
                    <PostTags>
                      {post.tags.slice(0, 3).map(tag => (
                        <TagItem key={tag}>{tag}</TagItem>
                      ))}
                    </PostTags>
                  </PostContent>
                </PostCard>
              ))}
            </PostsGrid>
          </>
        ) : (
          <EmptyState>
            <h3>No articles in {category} yet</h3>
            <p>
              We're working on adding more content to this category. 
              Check back soon or explore other categories.
            </p>
            <AllCategoriesButton to="/blog">
              Browse All Articles
            </AllCategoriesButton>
          </EmptyState>
        )}
      </CategoryContent>
    </PageContainer>
  );
}

export default Category;