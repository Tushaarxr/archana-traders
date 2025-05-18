// src/components/Footer/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ContactInfo,
  FooterBottom
} from './FooterElements';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink as={Link} to="/"><FaArrowRight />About</FooterLink>
              <FooterLink as={Link} to="/"><FaArrowRight />Our Mission</FooterLink>
              <FooterLink as={Link} to="/"><FaArrowRight />Testimonials</FooterLink>
              <FooterLink as={Link} to="/"><FaArrowRight />Career</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Products</FooterLinkTitle>
              <FooterLink as={Link} to="/products"><FaArrowRight />TMT Bars</FooterLink>
              <FooterLink as={Link} to="/products"><FaArrowRight />Steel Pipes</FooterLink>
              <FooterLink as={Link} to="/products"><FaArrowRight />Steel Sheets</FooterLink>
              <FooterLink as={Link} to="/products"><FaArrowRight />Channels</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <ContactInfo>
                <FaMapMarkerAlt />
                <FooterLink as="div">Archana traders jute mill road beside petrol pump</FooterLink>
              </ContactInfo>
              <ContactInfo>
                <FaPhone />
                <FooterLink as="a" href="tel:+919827143858">+91 98271 43858</FooterLink>
              </ContactInfo>
              <ContactInfo>
                <FaEnvelope />
                <FooterLink as="a" href="mailto:archanatraders1@gmail.com">archanatraders1@gmail.com</FooterLink>
              </ContactInfo>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Quick Links</FooterLinkTitle>
              <FooterLink as={Link} to="/"><FaArrowRight />Home</FooterLink>
              <FooterLink as={Link} to="/products"><FaArrowRight />Products</FooterLink>
              <FooterLink as={Link} to="/services"><FaArrowRight />Services</FooterLink>
              <FooterLink as={Link} to="/contact"><FaArrowRight />Contact</FooterLink>
              <FooterLink as={Link} to="/privacy"><FaArrowRight />Privacy Policy</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={scrollToTop}>
              Archana Traders
            </SocialLogo>
            <WebsiteRights>
              Archana Traders © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        
        <FooterBottom>
          Designed & Developed with ❤️ | Archana Traders
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
