// src/pages/NotFoundPage/index.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { Button } from '../../components/Button';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;
`;

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
      />
      <NotFoundContainer>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>
          Oops! The page you're looking for doesn't exist or has been moved.
        </NotFoundText>
        <Button as={Link} to="/" primary="true">
          Return to Home
        </Button>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
