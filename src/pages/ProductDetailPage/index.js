// src/pages/ProductDetailPage/index.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  DetailContainer,
  BreadcrumbNav,
  BreadcrumbLink,
  ProductInfoSection,
  ProductImageWrapper,
  ProductImage,
  ProductInfoContent,
  ProductTitle,
  ProductDescription,
  ActionButton,
  WhatsAppButton,
  TabsContainer,
  TabButton,
  TabContent,
  SpecificationTable,
  TermsList,
  TermsItem,
  BenefitsList,
  BenefitItem,
  RelatedProductsSection,
  RelatedProductsGrid,
  RelatedProductCard,
  RelatedProductImage,
  RelatedProductTitle
} from './ProductDetailPageElements';
import { steelCatalog } from '../../data/products';
import SEO from '../../components/SEO';

const ProductDetailPage = () => {
  const { categorySlug, subCategorySlug, productSlug } = useParams();
  const [activeTab, setActiveTab] = useState('dimensions');
  
  // Find the product
  const category = steelCatalog.find(cat => cat.slug === categorySlug);
  const subcategory = category?.subcategories.find(sub => sub.slug === subCategorySlug);
  const product = subcategory?.products.find(prod => prod.slug === productSlug);

  if (!product) {
    return (
      <DetailContainer>
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist.</p>
        <Link to="/products">Back to Products</Link>
      </DetailContainer>
    );
  }

  // Function to generate WhatsApp link with predefined message
  const getWhatsAppLink = (specificSize = '') => {
    const message = specificSize
      ? `Hello, I'm interested in ${product.name} (Size: ${specificSize}) from Archana Traders. Can you provide pricing and availability?`
      : `Hello, I'm interested in ${product.name} from Archana Traders. Can you provide more information?`;
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };

  // Get related products (other products in the same subcategory)
  const relatedProducts = subcategory.products
    .filter(prod => prod.slug !== productSlug)
    .slice(0, 3); // Show at most 3 related products

  return (
    <>
      <SEO
        title={product.name}
        description={product.shortDesc}
      />
      
      <DetailContainer>
        <BreadcrumbNav>
          <BreadcrumbLink to="/">Home</BreadcrumbLink> {' > '}
          <BreadcrumbLink to="/products">Products</BreadcrumbLink> {' > '}
          <BreadcrumbLink to={`/products/${categorySlug}`}>{category.name}</BreadcrumbLink> {' > '}
          <BreadcrumbLink to={`/products/${categorySlug}/${subCategorySlug}`}>{subcategory.name}</BreadcrumbLink> {' > '}
          <span>{product.name}</span>
        </BreadcrumbNav>

        <ProductInfoSection>
          <ProductImageWrapper>
            <ProductImage src={product.image} alt={product.name} />
          </ProductImageWrapper>
          
          <ProductInfoContent>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ActionButton href="tel:+919827143858">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              Call for Best Price
            </ActionButton>
            <WhatsAppButton 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Enquire on WhatsApp
            </WhatsAppButton>
          </ProductInfoContent>
        </ProductInfoSection>

        <TabsContainer>
          <div>
            <TabButton 
              active={activeTab === 'dimensions'} 
              onClick={() => setActiveTab('dimensions')}
            >
              Dimensions & Sizes
            </TabButton>
            <TabButton 
              active={activeTab === 'specifications'} 
              onClick={() => setActiveTab('specifications')}
            >
              Specifications
            </TabButton>
            <TabButton 
              active={activeTab === 'terms'} 
              onClick={() => setActiveTab('terms')}
            >
              Terms & Conditions
            </TabButton>
            {product.benefits && (
              <TabButton 
                active={activeTab === 'benefits'} 
                onClick={() => setActiveTab('benefits')}
              >
                Benefits
              </TabButton>
            )}
          </div>

          <TabContent active={activeTab === 'dimensions'}>
            <h3>Available Sizes & Dimensions</h3>
            <SpecificationTable>
              <thead>
                <tr>
                  {Object.keys(product.dimensions[0]).map((key) => (
                    key !== 'price' && <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                  ))}
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {product.dimensions.map((dim, index) => (
                  <tr key={index}>
                    {Object.entries(dim).map(([key, value]) => (
                      key !== 'price' && <td key={key}>{value}</td>
                    ))}
                    <td>{dim.price}</td>
                    <td>
                      <WhatsAppButton 
                        href={getWhatsAppLink(dim.size)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        smaller
                      >
                        Enquire
                      </WhatsAppButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </SpecificationTable>
          </TabContent>

          <TabContent active={activeTab === 'specifications'}>
            <h3>Technical Specifications</h3>
            {product.specifications ? (
              <SpecificationTable>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.property}</td>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </SpecificationTable>
            ) : (
              <p>Specifications not available for this product.</p>
            )}
          </TabContent>

          <TabContent active={activeTab === 'terms'}>
            <h3>Terms & Conditions</h3>
            <TermsList>
              {product.terms.map((term, index) => (
                <TermsItem key={index}>{term}</TermsItem>
              ))}
            </TermsList>
          </TabContent>

          {product.benefits && (
            <TabContent active={activeTab === 'benefits'}>
              <h3>Product Benefits</h3>
              <BenefitsList>
                {product.benefits.map((benefit, index) => (
                  <BenefitItem key={index}>{benefit}</BenefitItem>
                ))}
              </BenefitsList>
            </TabContent>
          )}
        </TabsContainer>

        {relatedProducts.length > 0 && (
          <RelatedProductsSection>
            <h3>Related Products</h3>
            <RelatedProductsGrid>
              {relatedProducts.map(related => (
                <RelatedProductCard 
                  key={related.slug}
                  to={`/products/${categorySlug}/${subCategorySlug}/${related.slug}`}
                >
                  <RelatedProductImage src={related.image} alt={related.name} />
                  <RelatedProductTitle>{related.name}</RelatedProductTitle>
                </RelatedProductCard>
              ))}
            </RelatedProductsGrid>
          </RelatedProductsSection>
        )}
      </DetailContainer>
    </>
  );
};

export default ProductDetailPage;
