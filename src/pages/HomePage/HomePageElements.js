// src/pages/HomePage/HomePageElements.js
import styled from 'styled-components';
import heroBg from '../../assets/images/hero-bg.png';

export const HeroSection = styled.section`
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg});
  background-position: center;
  background-size: cover;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: linear-gradient(180deg,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.8) 100%);
    z-index: 2;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 900px;
  position: relative;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: fadeIn 1.2s ease-in;

  @keyframes fadeIn {
    0% { opacity: 0; transform: translateY(20px);}
    100% { opacity: 1; transform: translateY(0);}
  }
`;



export const HeroH1 = styled.h1`
  color: white;
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-shadow: 0 2px 16px rgba(0,0,0,0.18);

  @media (max-width: 768px) { 
    font-size: 1.8rem;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) { 
    font-size: 1.7rem;
    line-height: 1.2;
  }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.3rem;
  max-width: 600px;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  text-shadow: 0 1px 8px rgba(0,0,0,0.13);

  @media (max-width: 768px) { 
    display: none; /* Hide subtitle on mobile */
  }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  
  .whatsapp-btn {
    @media (max-width: 768px) {
      padding: 8px 24px !important; /* Smaller button on mobile */
      font-size: 1rem !important;
    }
    
    @media (max-width: 480px) {
      padding: 8px 20px !important; /* Even smaller on very small screens */
      font-size: 0.9rem !important;
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

/* --- ABOUT SECTION --- */
export const IntroSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: 56px 0 40px 0;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
    font-family: ${({ theme }) => theme.fonts.heading};
    text-align: center;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 36px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  object-fit: cover;
  margin: 0 auto;
`;

export const AboutText = styled.div`
  font-size: 1.08rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  p {
    margin-bottom: 1.1rem;
    line-height: 1.7;
    font-family: ${({ theme }) => theme.fonts.body};
  }
`;

/* --- PRODUCTS SECTION --- */
export const ProductSection = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 56px 0;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

/* --- WHY CHOOSE US SECTION --- */
export const WhyChooseSection = styled.section`
  background: #fff;
  padding: 56px 0 40px 0;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  margin-top: 24px;

  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const WhyCard = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 32px 18px 24px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.22s, transform 0.22s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.09);
    transform: translateY(-4px) scale(1.03);
  }
`;

export const WhyIcon = styled.div`
  font-size: 2.3rem;
  margin-bottom: 14px;
`;

export const WhyTitle = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const WhyText = styled.p`
  font-size: 0.97rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  line-height: 1.6;
`;

// Add these to src/pages/HomePage/HomePageElements.js

export const ProductCardActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

export const ViewDetailsBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  flex: 1;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ViewMoreBtn = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  border: none;
  border-radius: 50px;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  }
`;

// Update the existing ProductGrid for better layout
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 900px) { 
    grid-template-columns: 1fr 1fr; 
  }
  @media (max-width: 600px) { 
    grid-template-columns: 1fr; 
  }
`;

// Update ProductCard for better styling
export const ProductCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.22s, transform 0.22s;
  border: 1px solid transparent;
  height: 100%; /* Ensure all cards have same height */
  min-height: 420px; /* Set minimum height for consistency */

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    min-height: 380px;
  }

  @media (max-width: 480px) {
    min-height: 360px;
  }
`;


export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  flex-shrink: 0; /* Prevent image from shrinking */
`;
export const ProductCardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1; /* Take remaining space */
  justify-content: space-between; /* Distribute content evenly */
`;

export const ProductTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 8px;
  line-height: 1.3;
  min-height: 2.6rem; /* Reserve space for 2 lines */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  margin-bottom: 10px;
  flex: 1; /* Take available space */
  min-height: 4.5rem; /* Reserve space for 3 lines */
  max-height: 4.5rem; /* Limit to 3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
