// src/pages/ProductsPage/index.js
import React, { useState } from 'react';
import {
  ProductsContainer,
  ProductsHeader,
  FiltersContainer,
  FilterButton,
  ProductsGrid,
  ProductCard,
  ProductImageContainer,
  ProductImage,
  ProductTitle,
  ProductDescription,
  CardActions,
  DetailsButton,
  WhatsAppButtonStyled,
  ProductBadge
} from './ProductsPageElements';
import SEO from '../../components/SEO';
import CTABanner from '../../components/CTABanner';
import { useNavigate } from 'react-router-dom';
import { steelCatalog } from '../../data/products';

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  // Flatten products from steelCatalog for filtering and display
  const allProducts = steelCatalog.flatMap(category => 
    category.subcategories.flatMap(subcat => 
      subcat.products.map(product => ({
        ...product,
        category: category.slug,
        subcategory: subcat.slug
      }))
    )
  );

  // Get unique categories for filter buttons
  const categories = ['all', ...new Set(allProducts.map(p => p.category))];

  // Filter products based on active filter
  const filteredProducts = activeFilter === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === activeFilter);

  // WhatsApp link generator
  const getWhatsAppLink = (product) => {
    const message = `Hello, I'm interested in ${product} from Archana Traders. Can you provide more information?`;
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <SEO
        title="Products"
        description="Browse our wide range of high-quality steel products including TMT bars, steel pipes, sheets, and structural steel."
      />

      <ProductsContainer>
        <div className="container">
          <ProductsHeader>
            <h2>Our Steel Products</h2>
            <p>
              Browse through our range of high-quality steel products. For pricing and availability,
              please contact us directly as prices vary based on market conditions.
            </p>
          </ProductsHeader>

          <FiltersContainer>
            {categories.map(cat => (
              <FilterButton
                key={cat}
                active={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === 'all' ? 'All Products' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </FilterButton>
            ))}
          </FiltersContainer>

          <ProductsGrid>
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug}>
                <ProductImageContainer>
                  {product.popular && <ProductBadge>Popular</ProductBadge>}
                  <ProductImage src={product.image} alt={product.name} />
                </ProductImageContainer>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.shortDesc || product.description}</ProductDescription>
                <CardActions>
                  <DetailsButton
                    onClick={() => navigate(`/products/${product.category}/${product.subcategory}/${product.slug}`)}
                  >
                    View Details
                  </DetailsButton>
                  <WhatsAppButtonStyled
                    href={getWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire
                  </WhatsAppButtonStyled>
                </CardActions>
              </ProductCard>
            ))}
          </ProductsGrid>
        </div>
      </ProductsContainer>
      <CTABanner />
    </>
  );
};

export default ProductsPage;
