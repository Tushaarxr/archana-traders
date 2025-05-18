// src/pages/ProductSubCategoryPage/index.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  SubcategoryContainer,
  BreadcrumbNav,
  BreadcrumbLink,
  SubcategoryHeader,
  SubcategoryDescription,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ButtonContainer,
  DetailsButton,
  EnquireButton
} from './ProductSubCategoryPageElements';
import { steelCatalog } from '../../data/products';
import SEO from '../../components/SEO';

const ProductSubCategoryPage = () => {
  const { categorySlug, subCategorySlug } = useParams();
  
  const category = steelCatalog.find(cat => cat.slug === categorySlug);
  const subcategory = category?.subcategories.find(sub => sub.slug === subCategorySlug);

  if (!subcategory) {
    return (
      <SubcategoryContainer>
        <h2>Subcategory not found</h2>
        <p>The subcategory you are looking for does not exist.</p>
        <Link to="/products">Back to Products</Link>
      </SubcategoryContainer>
    );
  }

  // Function to generate WhatsApp link with predefined message
  const getWhatsAppLink = (productName) => {
    const message = `Hello, I'm interested in ${productName} from Archana Traders. Can you provide more information?`;
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <SEO
        title={subcategory.name}
        description={subcategory.description}
      />
      
      <SubcategoryContainer>
        <BreadcrumbNav>
          <BreadcrumbLink to="/">Home</BreadcrumbLink> {' > '}
          <BreadcrumbLink to="/products">Products</BreadcrumbLink> {' > '}
          <BreadcrumbLink to={`/products/${categorySlug}`}>{category.name}</BreadcrumbLink> {' > '}
          <span>{subcategory.name}</span>
        </BreadcrumbNav>

        <SubcategoryHeader>{subcategory.name}</SubcategoryHeader>
        <SubcategoryDescription>{subcategory.description}</SubcategoryDescription>

        <ProductsGrid>
          {subcategory.products.map(product => (
            <ProductCard key={product.slug}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.shortDesc}</ProductDescription>
              <ButtonContainer>
                <DetailsButton to={`/products/${categorySlug}/${subCategorySlug}/${product.slug}`}>
                  View Details
                </DetailsButton>
                <EnquireButton 
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire
                </EnquireButton>
              </ButtonContainer>
            </ProductCard>
          ))}
        </ProductsGrid>
      </SubcategoryContainer>
    </>
  );
};

export default ProductSubCategoryPage;
