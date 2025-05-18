// src/components/Footer/FooterElements.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.lightGray});
  }
`;

export const FooterWrap = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 32px;
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: auto;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  padding-bottom: 12px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const FooterLink = styled.div`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  margin-bottom: 0.8rem;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(5px);
  }
  
  svg {
    margin-right: 8px;
    font-size: 14px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1200px;
  width: 100%;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 30px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.secondary};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  
  &:hover {
    color: ${({ theme }) => theme.colors.background};
    transition: 0.3s ease-out;
  }
`;

export const WebsiteRights = styled.small`
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: 16px;
  opacity: 0.7;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 200px;
    margin-top: 16px;
  }
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.background};
    transform: translateY(-3px);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const FooterBottom = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`;
