// src/pages/ProductCategoryPage/index.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  CategoryContainer,
  BreadcrumbNav,
  BreadcrumbLink,
  CategoryHeader,
  CategoryDescription,
  SubcategoryGrid,
  SubcategoryCard,
  SubcategoryImage,
  SubcategoryTitle,
  SubcategoryDesc,
  ViewButton
} from './ProductCategoryPageElements';
import { steelCatalog } from '../../data/products';
import SEO from '../../components/SEO';

const ProductCategoryPage = () => {
  const { categorySlug } = useParams();
  const category = steelCatalog.find(cat => cat.slug === categorySlug);

  if (!category) {
    return (
      <CategoryContainer>
        <h2>Category not found</h2>
        <p>The category you are looking for does not exist.</p>
        <Link to="/products">Back to Products</Link>
      </CategoryContainer>
    );
  }

  return (
    <>
      <SEO
        title={category.name}
        description={category.description}
      />
      
      <CategoryContainer>
        <BreadcrumbNav>
          <BreadcrumbLink to="/">Home</BreadcrumbLink> {' > '}
          <BreadcrumbLink to="/products">Products</BreadcrumbLink> {' > '}
          <span>{category.name}</span>
        </BreadcrumbNav>

        <CategoryHeader>{category.name}</CategoryHeader>
        <CategoryDescription>{category.description}</CategoryDescription>

        <SubcategoryGrid>
          {category.subcategories.map(subcategory => (
            <SubcategoryCard key={subcategory.slug}>
              <SubcategoryImage src={subcategory.image} alt={subcategory.name} />
              <SubcategoryTitle>{subcategory.name}</SubcategoryTitle>
              <SubcategoryDesc>{subcategory.description}</SubcategoryDesc>
              <ViewButton to={`/products/${categorySlug}/${subcategory.slug}`}>
                View Products
              </ViewButton>
            </SubcategoryCard>
          ))}
        </SubcategoryGrid>
      </CategoryContainer>
    </>
  );
};

export default ProductCategoryPage;
