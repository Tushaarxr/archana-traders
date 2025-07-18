// src/pages/ProductDetailPage/ProductDetailPageElements.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.div`
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

export const ProductInfoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 32px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ProductInfoContent = styled.div``;

export const ProductTitle = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const ProductDescription = styled.p`
  font-size: 1.05rem;
  margin-bottom: 24px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

export const ActionButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 12px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: ${props => props.smaller ? '8px 16px' : '12px 24px'};
  border-radius: 8px;
  font-size: ${props => props.smaller ? '0.9rem' : '1rem'};
  font-weight: bold;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #128C7E;
  }
`;

export const TabsContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  padding: 24px;
  margin-bottom: 40px;
`;

export const TabButton = styled.button`
  background: none;
  border: none;
  padding: 12px 24px;
  margin-right: 8px;
  margin-bottom: 16px;
  font-size: 1.05rem;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: 600px) {
    padding: 10px 16px;
    font-size: 0.9rem;
  }
`;

export const TabContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  padding-top: 16px;
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SpecificationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    background-color: ${({ theme }) => theme.colors.lightGray};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    th, td {
      padding: 8px 12px;
    }
  }
  
  @media (max-width: 600px) {
    display: block;
    overflow-x: auto;
  }
`;


export const TermsList = styled.ul`
  padding-left: 24px;
  margin-top: 16px;
`;

export const TermsItem = styled.li`
  margin-bottom: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
`;

export const BenefitsList = styled.ul`
  padding-left: 24px;
  margin-top: 16px;
  list-style-type: none;
`;

export const BenefitItem = styled.li`
  margin-bottom: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  
  &:before {
    content: "✓";
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
    position: absolute;
    left: -20px;
  }
`;

export const RelatedProductsSection = styled.div`
  margin-top: 40px;
  
  h3 {
    font-size: 1.6rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
  }
`;

export const RelatedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const RelatedProductCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

export const RelatedProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const RelatedProductTitle = styled.h4`
  padding: 12px;
  font-size: 1.05rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`;


