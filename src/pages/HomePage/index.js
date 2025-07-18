// src/pages/HomePage/index.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeroSection,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  IntroSection,
  AboutGrid,
  AboutImage,
  AboutText,
  ProductSection,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductDescription,
  WhyChooseSection,
  WhyGrid,
  WhyCard,
  WhyIcon,
  WhyTitle,
  WhyText,
  ProductCardActions,
  ViewDetailsBtn,
  ViewMoreBtn
} from './HomePageElements';
import { ButtonLink, WhatsAppButton } from '../../components/Button';
import SEO from '../../components/SEO';
import Stats from '../../components/Stats';
import FAQ from '../../components/FAQ';
import CTABanner from '../../components/CTABanner';
import { steelCatalog } from '../../data/products';

// Replace with your actual images
import officeImg from '../../assets/images/office.jpg';
import warehouseImg from '../../assets/images/warehouse.jpg';

const HomePage = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  // Function to get random products from steelCatalog
  const getRandomProducts = (count = 6) => {
    const allProducts = [];
    
    // Flatten all products from all categories and subcategories
    steelCatalog.forEach(category => {
      category.subcategories.forEach(subcat => {
        subcat.products.forEach(product => {
          allProducts.push({
            ...product,
            categorySlug: category.slug,
            categoryName: category.name,
            subcategorySlug: subcat.slug,
            subcategoryName: subcat.name
          });
        });
      });
    });

    // Shuffle and return specified count
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setRandomProducts(getRandomProducts(6));
  }, []);

  const getWhatsAppLink = (product = '') => {
    const message = product
      ? `Hello, I'm interested in ${product} from archana Traders. Can you provide more information?`
      : 'Hello, I am interested in your steel products. Can you provide more information?';
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <SEO
        title="Home"
        description="archana Traders - Trusted supplier of high-quality steel products for construction and industry."
      />

      {/* HERO SECTION */}
      <HeroSection>
        <HeroContent>
          <HeroH1>Building Stronger Futures with High-Quality TMT Bars and Iron Products</HeroH1>
          <HeroP>
            Archana Traders is a leading trader and supplier of TMT bars, steel plates, pipes, beams, and more. We deliver quality and reliability for every project.
          </HeroP>
          <HeroBtnWrapper>
            <WhatsAppButton
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              Enquire on WhatsApp
            </WhatsAppButton>
            <ButtonLink to="/products" style={{ marginLeft: 16 }}>
              View Products
            </ButtonLink>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroSection>

      {/* ABOUT US SECTION */}
      <IntroSection>
        <div className="container">
          <h2>About Us</h2>
          <AboutGrid>
            <AboutImage src={officeImg} alt="archana Traders Office" />
            <AboutText>
              <p>
                Archana Traders has served the steel industry for over 27 years, overcoming challenges and establishing a reputation for reliability and trust. We are a leading stockist and supplier of TMT bars, beams, rods, plates, pipes, channels, and more.
              </p>
              <p>
                Our extensive network with construction, industrial, and infrastructure companies ensures we deliver the right products, on time, across India. We never compromise on quality and pride ourselves on responsive customer service and efficient supply chain management.
              </p>
              <p>
                Headquartered in Raigarh, archana Traders is committed to supporting your projects with the best steel solutions.
              </p>
            </AboutText>
          </AboutGrid>
        </div>
      </IntroSection>

      {/* STATS SECTION */}
      <Stats />

      {/* PRODUCTS SECTION */}
      <ProductSection>
        <div className="container">
          <h2>Our Featured Products</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
            Discover our wide range of premium steel products from trusted manufacturers
          </p>
          <ProductGrid>
            {randomProducts.map((product, index) => (
              <ProductCard key={`${product.categorySlug}-${product.slug}-${index}`}>
                <ProductImage src={product.image} alt={product.name} />
                <div style={{ padding: '1rem' }}>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDescription>
                    {product.shortDesc || product.description.substring(0, 100) + '...'}
                  </ProductDescription>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: '#888', 
                    marginBottom: '1rem',
                    fontStyle: 'italic'
                  }}>
                    {product.categoryName} → {product.subcategoryName}
                  </div>
                  <ProductCardActions>
                    <ViewDetailsBtn 
                      as={Link}
                      to={`/products/${product.categorySlug}/${product.subcategorySlug}/${product.slug}`}
                    >
                      View Details
                    </ViewDetailsBtn>
                    <WhatsAppButton
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        padding: '8px 16px',
                        fontSize: '0.9rem',
                        flex: 1
                      }}
                    >
                      Enquire
                    </WhatsAppButton>
                  </ProductCardActions>
                </div>
              </ProductCard>
            ))}
          </ProductGrid>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <ViewMoreBtn as={Link} to="/products">
              View All Products
              <span style={{ marginLeft: '8px' }}>→</span>
            </ViewMoreBtn>
          </div>
        </div>
      </ProductSection>

      {/* WHY CHOOSE US SECTION */}
      <WhyChooseSection>
        <div className="container">
          <h2>Why Choose Us</h2>
          <WhyGrid>
            <WhyCard>
              <WhyIcon>🌟</WhyIcon>
              <WhyTitle>Quality Control</WhyTitle>
              <WhyText>
                We source only from certified manufacturers and conduct strict quality checks for every batch.
              </WhyText>
            </WhyCard>
            <WhyCard>
              <WhyIcon>💸</WhyIcon>
              <WhyTitle>Competitive Pricing</WhyTitle>
              <WhyText>
                Our efficient supply chain ensures you get the best rates for every order, big or small.
              </WhyText>
            </WhyCard>
            <WhyCard>
              <WhyIcon>🚚</WhyIcon>
              <WhyTitle>On-Time Delivery</WhyTitle>
              <WhyText>
                Pan-India logistics and a dedicated team ensure your materials arrive when you need them.
              </WhyText>
            </WhyCard>
            <WhyCard>
              <WhyIcon>🤝</WhyIcon>
              <WhyTitle>Customer Support</WhyTitle>
              <WhyText>
                24/7 support and a focus on long-term partnerships set us apart in the steel industry.
              </WhyText>
            </WhyCard>
          </WhyGrid>
        </div>
      </WhyChooseSection>

      {/* WAREHOUSE/INFRASTRUCTURE IMAGE */}
      <div style={{ background: '#f7f7f7', padding: '32px 0', textAlign: 'center' }}>
        <img
          src={warehouseImg}
          alt="Warehouse"
          style={{ maxWidth: '600px', width: '90%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        />
      </div>

      {/* CALL TO ACTION */}
      <CTABanner />

      {/* FAQ */}
      <FAQ />
    </>
  );
};

export default HomePage;
