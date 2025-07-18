// src/pages/AboutPage/index.js
import React from 'react';
import {
  AboutContainer,
  LegacyTitleSection,
  LegacyNumber,
  LegacyText,
  Section,
  SectionContainer,
  SectionTitle,
  CompanyOverviewSection,
  OverviewContent,
  OverviewImageContainer,
  OverviewImage,
  ImageOverlay,
  MVVGrid,
  MVVCard,
  MVVIcon,
  MVVTitle,
  MVVText,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorRole,
  ImageGallery,
  GalleryImage
} from './AboutPageElements';
import SEO from '../../components/SEO';
import { WhyGrid, WhyCard, WhyIcon, WhyTitle, WhyText } from '../HomePage/HomePageElements';
import facilityImg from '../../assets/images/achana-facility.jpg';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Achana Traders - 27+ years of excellence in steel trading, serving construction and industrial sectors across India."
      />
      
      <AboutContainer>
        {/* 27 Years Legacy Hero Section */}
        <LegacyTitleSection>
          <div className="legacy-container">
            <LegacyNumber>27</LegacyNumber>
            <LegacyText>Years of Excellence</LegacyText>
            <p style={{ 
              fontSize: '1.3rem', 
              color: '#666', 
              marginTop: '20px', 
              maxWidth: '600px', 
              margin: '20px auto 0',
              lineHeight: '1.6'
            }}>
              Building India's infrastructure with premium steel products for over 27 years. 
              Your trusted partner for quality, reliability, and excellence in steel trading.
            </p>
          </div>
        </LegacyTitleSection>

        {/* Company Overview with Image */}
        <Section>
          <SectionContainer>
            <SectionTitle>Our Journey</SectionTitle>
            <CompanyOverviewSection>
              <OverviewContent>
                <p>
                  Achana Traders has served the steel industry for over 27 years, overcoming challenges and 
                  establishing a reputation for reliability and trust. We are a leading stockist and supplier 
                  of TMT bars, beams, rods, plates, pipes, channels, and more.
                </p>
                <p>
                  Our extensive network with construction, industrial, and infrastructure companies ensures 
                  we deliver the right products, on time, across India. We never compromise on quality and 
                  pride ourselves on responsive customer service and efficient supply chain management.
                </p>
                <p>
                  Headquartered in Raigarh, Achana Traders is committed to supporting your projects with 
                  the best steel solutions.
                </p>
              </OverviewContent>
              
              <OverviewImageContainer>
                <OverviewImage src={facilityImg} alt="Achana Traders Facility" />
                <ImageOverlay>
                  {/* <h4>Our Modern Facility</h4>
                  <p>State-of-the-art warehouse and processing center</p> */}
                </ImageOverlay>
              </OverviewImageContainer>
            </CompanyOverviewSection>
          </SectionContainer>
        </Section>

        {/* Mission, Vision, Values with Enhanced Design */}
        <Section className="journey-section">
          <SectionContainer>
            <SectionTitle>Our Foundation</SectionTitle>
            <MVVGrid>
              <MVVCard>
                <MVVIcon className="mission" />
                <MVVTitle>Our Mission</MVVTitle>
                <MVVText>
                  At Achana Traders, our mission is to provide high-quality steel solutions that exceed 
                  customer expectations. We focus on delivering strong, versatile, and innovative products 
                  for all types of construction needs. Our goal is to ensure durability and long-lasting 
                  performance in every structure built with our steel.
                </MVVText>
              </MVVCard>
              
              <MVVCard>
                <MVVIcon className="vision" />
                <MVVTitle>Our Vision</MVVTitle>
                <MVVText>
                  To create value for customers by providing best products, customized service and strive 
                  for excellence without compromising on values or ethics.
                </MVVText>
              </MVVCard>
              
              <MVVCard>
                <MVVIcon className="values" />
                <MVVTitle>Our Values</MVVTitle>
                <MVVText>
                  To create value for customers by providing best products, customized service and strive 
                  for excellence without compromising on values or ethics.
                </MVVText>
              </MVVCard>
            </MVVGrid>
          </SectionContainer>
        </Section>

        {/* Image Gallery Section */}
        {/* <Section>
          <SectionContainer>
            <SectionTitle>Our Operations</SectionTitle>
            <ImageGallery>
              <GalleryImage>
                <img src="/images/warehouse-interior.jpg" alt="Warehouse Interior" />
              </GalleryImage>
              <GalleryImage>
                <img src="/images/steel-inventory.jpg" alt="Steel Inventory" />
              </GalleryImage>
              <GalleryImage>
                <img src="/images/quality-control.jpg" alt="Quality Control" />
              </GalleryImage>
              <GalleryImage>
                <img src="/images/loading-facility.jpg" alt="Loading Facility" />
              </GalleryImage>
            </ImageGallery>
          </SectionContainer>
        </Section> */}

        {/* Enhanced Company Stats */}
        <Section>
          <SectionContainer>
            <SectionTitle>Our Achievements</SectionTitle>
            <StatsGrid>
              <StatCard>
                <StatNumber>27+</StatNumber>
                <StatLabel>Years of Excellence</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>5000+</StatNumber>
                <StatLabel>Satisfied Customers</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>50+</StatNumber>
                <StatLabel>Product Varieties</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>100%</StatNumber>
                <StatLabel>Quality Assurance</StatLabel>
              </StatCard>
            </StatsGrid>
          </SectionContainer>
        </Section>

        {/* Why Choose Us Section */}
        <Section>
          <SectionContainer>
            <SectionTitle>Why Choose Achana Traders</SectionTitle>
            <WhyGrid>
              <WhyCard>
                <WhyIcon>🌟</WhyIcon>
                <WhyTitle>Quality Control</WhyTitle>
                <WhyText>
                  We source only from certified manufacturers and conduct strict quality checks for every batch.
                </WhyText>
              </WhyCard>
              <WhyCard>
                <WhyIcon>💸</WhyIcon>
                <WhyTitle>Competitive Pricing</WhyTitle>
                <WhyText>
                  Our efficient supply chain ensures you get the best rates for every order, big or small.
                </WhyText>
              </WhyCard>
              <WhyCard>
                <WhyIcon>🚚</WhyIcon>
                <WhyTitle>On-Time Delivery</WhyTitle>
                <WhyText>
                  Pan-India logistics and a dedicated team ensure your materials arrive when you need them.
                </WhyText>
              </WhyCard>
              <WhyCard>
                <WhyIcon>🤝</WhyIcon>
                <WhyTitle>Customer Support</WhyTitle>
                <WhyText>
                  27+ years of experience with a focus on long-term partnerships set us apart in the steel industry.
                </WhyText>
              </WhyCard>
            </WhyGrid>
          </SectionContainer>
        </Section>

        {/* Enhanced Testimonials with Avatars */}
        <Section>
          <SectionContainer>
            <SectionTitle>What Our Customers Say</SectionTitle>
            <TestimonialsGrid>
              <TestimonialCard>
                <TestimonialText>
                  "Achana Traders has been our go-to steel supplier for the past 5 years. Their TMT bars 
                  are of exceptional quality and their delivery is always on time. Highly recommended for 
                  any construction project."
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>RK</AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>Rajesh Kumar</AuthorName>
                    <AuthorRole>Construction Manager, Kumar Builders</AuthorRole>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>

              <TestimonialCard>
                <TestimonialText>
                  "The quality of steel products from Achana Traders is outstanding. They understand our 
                  requirements and always deliver the right materials at competitive prices. Great service!"
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>PS</AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>Priya Sharma</AuthorName>
                    <AuthorRole>Project Director, Sharma Infrastructure</AuthorRole>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>

              <TestimonialCard>
                <TestimonialText>
                  "Professional service and reliable products. Achana Traders has helped us complete multiple 
                  projects successfully. Their team is knowledgeable and always ready to help."
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>AP</AuthorAvatar>
                  <AuthorInfo>
                    <AuthorName>Amit Patel</AuthorName>
                    <AuthorRole>Site Engineer, Patel Construction Co.</AuthorRole>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            </TestimonialsGrid>
          </SectionContainer>
        </Section>
      </AboutContainer>
    </>
  );
};

export default AboutPage;
