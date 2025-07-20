import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Search, Filter, Clock, User, Tag } from 'lucide-react';
import { blogPosts, categories } from '../data/blogPosts';

const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const BlogHeader = styled.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.25rem;
    color: #e2e8f0;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const BlogContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const FiltersSection = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 3rem;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: #0A84FF;
      box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
    }
    
    &::placeholder {
      color: #64748b;
    }
  }
  
  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
  }
`;

const CategoryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${props => props.active ? '#0A84FF' : '#e2e8f0'};
  background: ${props => props.active ? '#0A84FF' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0A84FF;
    color: ${props => props.active ? 'white' : '#0A84FF'};
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

const PostCategory = styled.span`
  background: rgba(10, 132, 255, 0.1);
  color: #0A84FF;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  width: fit-content;
  margin-bottom: 1rem;
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
  background: #f8fafc;
  color: #64748b;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
`;

const NoResults = styled.div`
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

const ResultsCount = styled.p`
  color: #64748b;
  margin-bottom: 2rem;
  font-size: 0.875rem;
`;

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageContainer>
      <BlogHeader>
        <HeaderContent>
          <h1>Crypto Blog</h1>
          <p>
            Explore our comprehensive collection of cryptocurrency insights, 
            analysis, and educational content
          </p>
        </HeaderContent>
      </BlogHeader>

      <BlogContent>
        <FiltersSection>
          <FiltersGrid>
            <SearchContainer>
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>
            
            <CategoryFilters>
              {categories.map(category => (
                <CategoryButton
                  key={category}
                  active={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </CategoryButton>
              ))}
            </CategoryFilters>
          </FiltersGrid>
        </FiltersSection>

        {filteredPosts.length > 0 ? (
          <>
            <ResultsCount>
              Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </ResultsCount>
            
            <PostsGrid>
              {filteredPosts.map(post => (
                <PostCard key={post.id} to={`/post/${post.id}`}>
                  <PostImage>
                    {post.category === 'Analysis' ? '📈' :
                     post.category === 'Guide' ? '📖' :
                     post.category === 'Security' ? '🛡️' :
                     post.category === 'Technology' ? '⚙️' :
                     post.category === 'NFTs' ? '🎨' :
                     '₿'}
                  </PostImage>
                  
                  <PostContent>
                    <PostCategory>{post.category}</PostCategory>
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
          <NoResults>
            <h3>No articles found</h3>
            <p>
              Try adjusting your search terms or selecting a different category
            </p>
          </NoResults>
        )}
      </BlogContent>
    </PageContainer>
  );
}

export default Blog;