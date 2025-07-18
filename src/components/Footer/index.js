// src/components/Footer/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterTop,
  FooterMain,
  FooterSection,
  FooterLogo,
  FooterDescription,
  FooterTitle,
  FooterLinkList,
  FooterLink,
  ContactItem,
  ContactIcon,
  ContactText,
  SocialSection,
  SocialIcons,
  SocialIconLink,
  FooterBottom,
  FooterDivider,
  CopyrightText,
  BackToTopButton,
  NewsletterSection,
  NewsletterInput,
  NewsletterButton,
  QuickContact
} from './FooterElements';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getWhatsAppLink = () => {
    const message = `Hello, I'm interested in your steel products. Can you provide more information?`;
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterTop>
          <FooterMain>
            {/* Company Info Section */}
            <FooterSection>
              <FooterLogo to="/" onClick={scrollToTop}>
                Archana Traders
              </FooterLogo>
              <FooterDescription>
                Leading supplier of premium steel products for over 27 years. 
                We deliver quality, reliability, and excellence in every project 
                across India.
              </FooterDescription>
              <SocialIcons>
                <SocialIconLink 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  aria-label="Facebook"
                  color="#1877F2"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink 
                  href="https://www.instagram.com/archanatradersraigarh?igsh=MTB4YWZ6a2c0aXBmeg%3D%3D&utm_source=qr" 
                  target="_blank" 
                  aria-label="Instagram"
                  color="#E4405F"
                >
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </FooterSection>

            {/* Quick Links Section */}
            <FooterSection>
              <FooterTitle>Quick Links</FooterTitle>
              <FooterLinkList>
                <FooterLink as={Link} to="/">
                  <FaArrowRight />
                  Home
                </FooterLink>
                <FooterLink as={Link} to="/products">
                  <FaArrowRight />
                  Products
                </FooterLink>
                <FooterLink as={Link} to="/contact">
                  <FaArrowRight />
                  Contact Us
                </FooterLink>
                <FooterLink as={Link} to="/about">
                  <FaArrowRight />
                  About Us
                </FooterLink>
              </FooterLinkList>
            </FooterSection>

            {/* Products Section */}
            <FooterSection>
              <FooterTitle>Our Products</FooterTitle>
              <FooterLinkList>
                <FooterLink as={Link} to="/products/tmt-bars">
                  <FaArrowRight />
                  TMT Bars
                </FooterLink>
                <FooterLink as={Link} to="/products/steel-pipes">
                  <FaArrowRight />
                  Steel Pipes
                </FooterLink>
                <FooterLink as={Link} to="/products/mild-steel-plates">
                  <FaArrowRight />
                  Steel Plates
                </FooterLink>
                <FooterLink as={Link} to="/products/structural-steel">
                  <FaArrowRight />
                  Structural Steel
                </FooterLink>
              </FooterLinkList>
            </FooterSection>

            {/* Contact Section */}
            <FooterSection>
              <FooterTitle>Get In Touch</FooterTitle>
              <ContactItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactText>
                  Kotra Rd, Rukmani Vihar, Raigarh, Chhattisgarh 496001
                </ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactText>
                  <a href="tel:+919827143858">+91 98271 43858</a>
                </ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactText>
                  <a href="mailto:archanatraders1@gmail.com">
                    archanatraders1@gmail.com
                  </a>
                </ContactText>
              </ContactItem>
              
              <QuickContact>
                <NewsletterButton 
                  as="a" 
                  href="tel:+919827143858"
                  style={{ marginRight: '10px' }}
                >
                  Call Now
                </NewsletterButton>
                <NewsletterButton 
                  as="a" 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whatsapp
                >
                  WhatsApp
                </NewsletterButton>
              </QuickContact>
            </FooterSection>
          </FooterMain>
        </FooterTop>

        <FooterDivider />
        
        <FooterBottom>
          <CopyrightText>
            © {new Date().getFullYear()} archana Traders. All rights reserved. | 
            Designed & Developed with ❤️
          </CopyrightText>
          <BackToTopButton onClick={scrollToTop}>
            Back to Top ↑
          </BackToTopButton>
        </FooterBottom>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
