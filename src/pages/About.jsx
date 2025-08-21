import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Bitcoin, Target, Users, Shield, Mail, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const PageContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const AboutHeader = styled.section`
  background: linear-gradient(135deg, #0A84FF 0%, #1a1a1a 100%);
  color: white;
  padding: 6rem 0;
  text-align: center;
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeaderIcon = styled.div`
  margin: 0 auto 2rem;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #e2e8f0;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 5rem 0;
  
  &:nth-child(even) {
    background: #f8fafc;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a1a1a;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const MissionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`;

const MissionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.div`
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const CardDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const TeamAvatar = styled.div`
  margin: 0 auto 1.5rem;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #0A84FF 0%, #FF5A5F 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

const TeamName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const TeamRole = styled.p`
  color: #0A84FF;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f8fafc;
  border-radius: 8px;
  color: #64748b;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: #0A84FF;
    color: white;
    transform: translateY(-2px);
  }
`;

const StorySection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #374151;
    margin-bottom: 2rem;
  }
`;

const CTASection = styled.section`
  background: #1a1a1a;
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.125rem;
    color: #e2e8f0;
    margin-bottom: 2rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  background: linear-gradient(135deg, #0A84FF 0%, #0056d3 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(10, 132, 255, 0.3);
  }
`;

const SecondaryButton = styled.a`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

function About() {
  return (
    <PageContainer>
      <AboutHeader>
        <HeaderContent>
          <HeaderIcon>
            <Bitcoin size={50} />
          </HeaderIcon>
          <Title>About CryptoBlog</Title>
          <Subtitle>
            We're passionate about making cryptocurrency accessible, understandable, 
            and profitable for everyone. Our mission is to educate, inform, and empower 
            the next generation of crypto enthusiasts.
          </Subtitle>
        </HeaderContent>
      </AboutHeader>

      <ContentSection>
        <Container>
          <SectionHeader>
            <h2>Our Mission</h2>
            <p>
              Democratizing cryptocurrency knowledge through high-quality, 
              accessible content and expert insights.
            </p>
          </SectionHeader>
          
          <MissionGrid>
            <MissionCard>
              <CardIcon>
                <Target size={40} />
              </CardIcon>
              <CardTitle>Educate</CardTitle>
              <CardDescription>
                We provide comprehensive guides and tutorials to help newcomers 
                understand the complexities of cryptocurrency and blockchain technology.
              </CardDescription>
            </MissionCard>
            
            <MissionCard>
              <CardIcon>
                <Shield size={40} />
              </CardIcon>
              <CardTitle>Protect</CardTitle>
              <CardDescription>
                Security is paramount in crypto. We share best practices and 
                safety measures to help you protect your digital assets.
              </CardDescription>
            </MissionCard>
            
            <MissionCard>
              <CardIcon>
                <Users size={40} />
              </CardIcon>
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Building a supportive community of crypto enthusiasts who share 
                knowledge, insights, and experiences together.
              </CardDescription>
            </MissionCard>
          </MissionGrid>
        </Container>
      </ContentSection>

      <ContentSection>
        <Container>
          <StorySection>
            <SectionHeader>
              <h2>Our Story</h2>
              <p>
                How we became passionate advocates for cryptocurrency education and adoption.
              </p>
            </SectionHeader>
            
            <p>
              Founded in 2023, CryptoBlog emerged from a simple realization: the cryptocurrency 
              space was full of complex information but lacked accessible, trustworthy educational 
              content for everyday people.
            </p>
            
            <p>
              Our team of crypto experts, financial analysts, and blockchain developers came together 
              with a shared vision: to bridge the knowledge gap between crypto complexity and public 
              understanding. We believe that everyone deserves access to clear, accurate, and 
              actionable cryptocurrency information.
            </p>
            
            <p>
              Today, we're proud to serve thousands of readers monthly, helping them navigate 
              the exciting world of digital assets with confidence and security.
            </p>
          </StorySection>
        </Container>
      </ContentSection>

      <ContentSection>
        <Container>
          <SectionHeader>
            <h2>Meet Our Team</h2>
            <p>
              Passionate crypto experts dedicated to bringing you the best insights and analysis.
            </p>
          </SectionHeader>
          
          <TeamGrid>
            <TeamCard>
              <TeamAvatar>AT</TeamAvatar>
              <TeamName>Alex Thompson</TeamName>
              <TeamRole>Lead Analyst</TeamRole>
              <TeamBio>
                Former Wall Street analyst with 8+ years in traditional finance and 5 years 
                in crypto. Specializes in technical analysis and market predictions.
              </TeamBio>
              <SocialLinks>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter size={16} />
                </SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                </SocialLink>
              </SocialLinks>
            </TeamCard>
            
            <TeamCard>
              <TeamAvatar>SC</TeamAvatar>
              <TeamName>Sarah Chen</TeamName>
              <TeamRole>DeFi Specialist</TeamRole>
              <TeamBio>
                Blockchain developer turned educator with deep expertise in DeFi protocols, 
                smart contracts, and yield farming strategies.
              </TeamBio>
              <SocialLinks>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter size={16} />
                </SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                </SocialLink>
              </SocialLinks>
            </TeamCard>
            
            <TeamCard>
              <TeamAvatar>MR</TeamAvatar>
              <TeamName>Mike Rodriguez</TeamName>
              <TeamRole>Security Expert</TeamRole>
              <TeamBio>
                Cybersecurity professional focused on crypto security, wallet safety, 
                and protecting digital assets from threats and scams.
              </TeamBio>
              <SocialLinks>
                <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter size={16} />
                </SocialLink>
                <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                </SocialLink>
              </SocialLinks>
            </TeamCard>
          </TeamGrid>
        </Container>
      </ContentSection>

      <CTASection>
        <Container>
          <CTAContent>
            <h2>Join Our Journey</h2>
            <p>
              Ready to dive deeper into the world of cryptocurrency? 
              Explore our latest articles or get in touch with our team.
            </p>
            <CTAButtons>
              <PrimaryButton to="/blog">
                Read Our Blog
                <ArrowRight size={20} />
              </PrimaryButton>
              <SecondaryButton href="mailto:contact@cryptoblog.com">
                <Mail size={20} />
                Contact Us
              </SecondaryButton>
            </CTAButtons>
          </CTAContent>
        </Container>
      </CTASection>
    </PageContainer>
  );
}

export default About;