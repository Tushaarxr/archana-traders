// src/components/Footer/FooterElements.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.02)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.02)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.02)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
`;

export const FooterWrap = styled.div`
  position: relative;
  z-index: 1;
`;

export const FooterTop = styled.div`
  padding: 60px 0 40px;
`;

export const FooterMain = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 16px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.3s ease;
  }
`;

export const FooterDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 0.95rem;
`;

export const FooterTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  font-family: ${({ theme }) => theme.fonts.heading};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 2px;
  }
`;

export const FooterLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FooterLink = styled.div`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    font-size: 0.7rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    padding-left: 8px;
    
    svg {
      transform: translateX(4px);
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
`;

export const ContactIcon = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const ContactText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  font-size: 0.9rem;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialIconLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: ${({ color }) => color || '#fff'};
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    color: #fff;
  }
`;

export const QuickContact = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const NewsletterButton = styled.button`
  background: ${({ whatsapp, theme }) => whatsapp ? '#25D366' : theme.colors.primary};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9rem;

  &:hover {
    background: ${({ whatsapp, theme }) => whatsapp ? '#128C7E' : theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const FooterDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin: 0 24px;
`;

export const FooterBottom = styled.div`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
  margin: 0;
`;

export const BackToTopButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.7);
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

// Legacy exports for compatibility
export const FooterLinksContainer = styled.div``;
export const FooterLinksWrapper = styled.div``;
export const FooterLinkItems = styled.div``;
export const FooterLinkTitle = styled.h3``;
export const SocialMedia = styled.section``;
export const SocialMediaWrap = styled.div``;
export const SocialLogo = styled(Link)``;
export const WebsiteRights = styled.small``;
export const ContactInfo = styled.div``;
export const NewsletterSection = styled.div``;
export const NewsletterInput = styled.input``;
