import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Bitcoin, Twitter, Github, Mail, Heart } from 'lucide-react';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: #e2e8f0;
  padding: 3rem 0 1rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #0A84FF;
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  p {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: #0A84FF;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(10, 132, 255, 0.1);
  border-radius: 8px;
  color: #0A84FF;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: #0A84FF;
    color: white;
    transform: translateY(-2px);
  }
`;

const NewsletterSection = styled.div`
  background: rgba(10, 132, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  h3 {
    color: #0A84FF;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #94a3b8;
    margin-bottom: 1rem;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  font-size: 1rem;
  
  &::placeholder {
    color: #64748b;
  }
  
  &:focus {
    outline: none;
    border-color: #0A84FF;
    box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(10, 132, 255, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0A84FF;
  font-size: 1.25rem;
  font-weight: 700;
`;

const Copyright = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    alert('Thanks for subscribing! (This is a demo)');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <NewsletterSection>
          <h3>Stay Updated</h3>
          <p>Get the latest crypto insights delivered to your inbox weekly.</p>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <EmailInput 
              type="email" 
              placeholder="Enter your email" 
              required 
            />
            <SubscribeButton type="submit">
              Subscribe
            </SubscribeButton>
          </NewsletterForm>
        </NewsletterSection>

        <FooterGrid>
          <FooterSection>
            <Logo>
              <Bitcoin size={24} />
              CryptoBlog
            </Logo>
            <p>
              Your trusted source for cryptocurrency news, analysis, and insights. 
              We cover everything from Bitcoin and Ethereum to DeFi and NFTs.
            </p>
            <SocialLinks>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={18} />
              </SocialLink>
              <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
              </SocialLink>
              <SocialLink href="mailto:contact@cryptoblog.com">
                <Mail size={18} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Content</h3>
            <FooterLinks>
              <FooterLink to="/blog">All Posts</FooterLink>
              <FooterLink to="/category/Analysis">Analysis</FooterLink>
              <FooterLink to="/category/Guide">Guides</FooterLink>
              <FooterLink to="/category/Security">Security</FooterLink>
              <FooterLink to="/category/DeFi">DeFi</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Resources</h3>
            <FooterLinks>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Categories</h3>
            <FooterLinks>
              <FooterLink to="/category/Bitcoin">Bitcoin</FooterLink>
              <FooterLink to="/category/Ethereum">Ethereum</FooterLink>
              <FooterLink to="/category/NFTs">NFTs</FooterLink>
              <FooterLink to="/category/Trading">Trading</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © 2024 CryptoBlog. Made with <Heart size={16} color="#FF5A5F" /> for the crypto community.
          </Copyright>
          <Logo>
            <Bitcoin size={20} />
            CryptoBlog
          </Logo>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;