// src/components/CTABanner/index.js
import React from 'react';
import styled from 'styled-components';
import { WhatsAppButton } from '../Button';
import { Link } from 'react-router-dom';

const CTAContainer = styled.section`
  background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  color: white;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Description = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 1.1rem;
  opacity: 0.9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const LinkButton = styled(Link)`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
    transform: translateY(-3px);
  }
`;

const CTABanner = () => {
  const getWhatsAppLink = () => {
    const message = `Hello, I'm interested in your steel products. Can you provide more information?`;
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };
  
  return (
    <CTAContainer>
      <Content>
        <Title>Ready to Place an Order?</Title>
        <Description>
          Contact us today for competitive pricing and expert advice on selecting the right steel products for your project.
        </Description>
        <ButtonContainer>
          <LinkButton to="/contact">Contact Us</LinkButton>
          <WhatsAppButton 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: '#25D366',
              padding: '12px 30px',
              borderRadius: '8px',
              fontWeight: 'bold'
            }}
          >
            Chat on WhatsApp
          </WhatsAppButton>
        </ButtonContainer>
      </Content>
    </CTAContainer>
  );
};

export default CTABanner;
