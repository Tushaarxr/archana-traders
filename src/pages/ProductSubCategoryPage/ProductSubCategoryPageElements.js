// src/pages/ProductSubCategoryPage/ProductSubCategoryPageElements.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SubcategoryContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 16px 64px;
`;

export const BreadcrumbNav = styled.div`
  margin-bottom: 24px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const SubcategoryHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const SubcategoryDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 32px;
  max-width: 800px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  font-size: 1.25rem;
  margin: 16px 16px 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
`;

export const ProductDescription = styled.p`
  margin: 0 16px 16px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem;
  text-align: center;
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 16px 16px;
`;

export const DetailsButton = styled(Link)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const EnquireButton = styled.a`
  flex: 1;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #128C7E;
  }
`;
