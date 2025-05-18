import styled from 'styled-components';

export const ProductsContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.lightGray};
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }
`;

export const ProductsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
  }
  p {
    max-width: 800px;
    margin: 0 auto;
    font-family: ${({ theme }) => theme.fonts.body};
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FilterButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.lightGray};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.text};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
    transform: translateY(-5px);
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProductBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 5px 10px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 2;
`;

export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: ${({ theme }) => theme.spacing.md} 0 0 0;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
`;

export const ProductDescription = styled.p`
  padding: 0 ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-grow: 1;
  font-family: ${({ theme }) => theme.fonts.body};
  text-align: center;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const DetailsButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const WhatsAppButtonStyled = styled.a`
  background: #25D366;
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s;
  &:hover {
    background: #128C7E;
  }
`;
