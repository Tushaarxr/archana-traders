// src/pages/HomePage/HomePageElements.js
import styled from 'styled-components';
import heroBg from '../../assets/images/hero-bg.jpg';

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
  color: #fff;
  font-size: 2.7rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  text-shadow: 0 2px 16px rgba(0,0,0,0.18);

  @media (max-width: 768px) { font-size: 2.1rem; }
  @media (max-width: 480px) { font-size: 1.5rem; }
`;

export const HeroP = styled.p`
  color: #fff;
  font-size: 1.3rem;
  max-width: 600px;
  margin-bottom: 2rem;
  font-family: ${({ theme }) => theme.fonts.body};
  text-shadow: 0 1px 8px rgba(0,0,0,0.13);

  @media (max-width: 768px) { font-size: 1.1rem; }
  @media (max-width: 480px) { font-size: 1rem; }
`;

export const HeroBtnWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
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

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 24px;

  @media (max-width: 900px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: box-shadow 0.22s, transform 0.22s;

  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
    transform: translateY(-6px) scale(1.03);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  margin: 18px 0 4px 0;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 18px 18px 18px;
  flex-grow: 1;
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

