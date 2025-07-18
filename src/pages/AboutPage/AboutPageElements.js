// src/pages/AboutPage/AboutPageElements.js
import styled from 'styled-components';

export const AboutContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
`;

export const AboutHero = styled.section`
  background: linear-gradient(rgba(1, 37, 125, 0.8), rgba(13, 71, 161, 0.7)), 
              url('/images/steel-industry-hero.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 0 80px 0;
  text-align: center;
  color: white;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(135deg, rgba(1, 37, 125, 0.7), rgba(13, 71, 161, 0.5));
    z-index: 1;
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 80px 0 60px 0;
  }
`;

export const AboutHeroContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
  
  h1 {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
  
  p {
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
    text-shadow: 0 1px 5px rgba(0,0,0,0.3);
    
    @media (max-width: 768px) {
      font-size: 1.15rem;
      padding: 0 10px;
    }
  }
`;

export const Section = styled.section`
  padding: 80px 0;
  position: relative;
  
  &:nth-child(even) {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
  
  &.journey-section {
    background: linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), 
                url('/images/steel-warehouse-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    @media (max-width: 768px) {
      background-attachment: scroll;
    }
  }
`;

export const SectionContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
`;



// Add new styled components for enhanced visuals
export const CompanyOverviewSection = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const OverviewContent = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const OverviewImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const OverviewImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
  padding: 25px;
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 1.3rem;
    font-weight: bold;
  }
  
  p {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.9;
  }
`;

export const MVVGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    gap: 25px;
    grid-template-columns: 1fr;
  }
`;

export const MVVCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 35px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}15, transparent);
    border-radius: 0 0 0 100%;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
  }
`;



export const MVVTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.2rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const MVVText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  text-align: center;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 35px;
  margin-top: 50px;
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px 25px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const StatNumber = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    gap: 25px;
  }
`;

export const TestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 35px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  position: relative;
  transition: all 0.3s ease;

  &:before {
    content: '"';
    position: absolute;
    top: -15px;
    left: 25px;
    font-size: 5rem;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.2;
    font-family: serif;
    font-weight: bold;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.12);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

export const TestimonialText = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 1;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;
`;

export const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const AuthorInfo = styled.div``;

export const AuthorName = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
`;

export const AuthorRole = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

// Add image gallery component
export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
`;

export const GalleryImage = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 200px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Add these new styled components to your existing AboutPageElements.js

// Legacy Hero Section
export const LegacyHeroSection = styled.section`
  background: linear-gradient(135deg, rgba(1, 37, 125, 0.95), rgba(13, 71, 161, 0.85)),
              url('/images/steel-legacy-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 0;
  margin: 80px 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(1, 37, 125, 0.1) 0%, 
      transparent 50%, 
      rgba(13, 71, 161, 0.1) 100%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
    padding: 60px 0;
    margin: 60px 0;
  }
`;

export const LegacyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const LegacyBadge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 8px 24px;
  margin-bottom: 20px;
  
  span {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;



export const LegacyTitle = styled.h2`
  font-size: 3.5rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const LegacySubtitle = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Timeline Section
export const TimelineSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: -10%;
    width: 30%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(1, 37, 125, 0.03));
    transform: skewX(-15deg);
  }
`;

export const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
`;

export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transform: translateY(-50%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    
    &:before {
      display: none;
    }
  }
`;

export const TimelineCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  border: 3px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    border: 4px solid white;
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    &:before {
      display: none;
    }
  }
`;

export const TimelineYear = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
`;

export const TimelineEvent = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 15px;
  font-weight: 600;
`;

export const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  font-size: 1rem;
`;

// Achievement Showcase
export const AchievementShowcase = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/steel-pattern.png') repeat;
    opacity: 0.05;
  }
`;

export const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
  position: relative;
  z-index: 2;
`;

export const AchievementCard = styled.div`
  text-align: center;
  padding: 30px 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const AchievementIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  opacity: 0.9;
`;

export const AchievementNumber = styled.div`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 10px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

export const AchievementLabel = styled.div`
  font-size: 1.1rem;
  opacity: 0.9;
  font-weight: 500;
`;

export const LegacyTitleSection = styled.div`
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  
  .legacy-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }
`;
export const LegacyNumber = styled.div`
  font-size: 4.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
  margin-right: 15px;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
    margin-right: 10px;
  }
`;

export const LegacyText = styled.span`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  vertical-align: center;
  margin-top: 10px;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    display: block;
    margin-top: 0;
  }
`;

// Update SectionTitle to remove underline
export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2.5rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  position: relative;
  
  /* Remove the underline by commenting out the :after pseudo-element */
  /* 
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    border-radius: 2px;
  }
  */

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Fix MVV Icon to properly display icons instead of emojis
export const MVVIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: white;
  box-shadow: 0 8px 20px rgba(1, 37, 125, 0.3);
  
  /* Use CSS content for reliable icon display */
  &.mission::before {
    content: "🎯";
    font-size: 2.2rem;
  }
  
  &.vision::before {
    content: "👁️";
    font-size: 2.2rem;
  }
  
  &.values::before {
    content: "⭐";
    font-size: 2.2rem;
  }
`;