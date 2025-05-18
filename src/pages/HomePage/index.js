// src/pages/HomePage/index.js
import React from 'react';
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
} from './HomePageElements';
import { ButtonLink, WhatsAppButton } from '../../components/Button';
import SEO from '../../components/SEO';
import Stats from '../../components/Stats';
import FAQ from '../../components/FAQ';
import CTABanner from '../../components/CTABanner';

// Replace with your actual images
import officeImg from '../../assets/images/office.jpg';
import tmtBars from '../../assets/images/tmt-bars.jpg';
import steelPipes from '../../assets/images/steel-pipes.jpg';
import steelSheets from '../../assets/images/steel-sheets.jpg';
import warehouseImg from '../../assets/images/warehouse.jpg';

const HomePage = () => {
  const getWhatsAppLink = (product = '') => {
    const message = product
      ? `Hello, I'm interested in ${product} from Archana Traders. Can you provide more information?`
      : 'Hello, I am interested in your steel products. Can you provide more information?';
    return `https://wa.me/919827143858?text=${encodeURIComponent(message)}`;
  };

  return (
    <>
      <SEO
        title="Home"
        description="Archana Traders - Trusted supplier of high-quality steel products for construction and industry."
      />

      {/* HERO SECTION */}
      <HeroSection>
        <HeroContent>
          <HeroH1>Forging Tomorrow's Foundations with Unyielding Steel Excellence</HeroH1>
          <HeroP>
            Archana Traders is a leading trader and supplier of TMT bars, steel plates, pipes, beams, and more. We deliver quality and reliability for every project.
          </HeroP>
          <HeroBtnWrapper>
            <WhatsAppButton
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              big="true"
              fontBig="true"
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
          <h2>About Archana Traders</h2>
          <AboutGrid>
            <AboutImage src={officeImg} alt="Archana Traders Office" />
            <AboutText>
              <p>
                Archana Traders has served the steel industry for over 15 years, overcoming challenges and establishing a reputation for reliability and trust. We are a leading stockist and supplier of TMT bars, beams, rods, plates, pipes, channels, and more, sourcing only from trusted manufacturers like SAIL, JSW, and Jindal.
              </p>
              <p>
                Our extensive network with construction, industrial, and infrastructure companies ensures we deliver the right products, on time, across India. We never compromise on quality and pride ourselves on responsive customer service and efficient supply chain management.
              </p>
              <p>
                Headquartered in [Your City], Archana Traders is committed to supporting your projects with the best steel solutions.
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
          <h2>Our Products</h2>
          <ProductGrid>
            <ProductCard>
              <ProductImage src={tmtBars} alt="TMT Bars" />
              <ProductTitle>TMT Bars</ProductTitle>
              <ProductDescription>
                High-strength, flexible, and reliable TMT bars for all construction needs.
              </ProductDescription>
              <WhatsAppButton
                href={getWhatsAppLink('TMT Bars')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
              </WhatsAppButton>
            </ProductCard>
            <ProductCard>
              <ProductImage src={steelPipes} alt="Steel Pipes" />
              <ProductTitle>Steel Pipes</ProductTitle>
              <ProductDescription>
                Durable steel pipes for plumbing, structure, and industry.
              </ProductDescription>
              <WhatsAppButton
                href={getWhatsAppLink('Steel Pipes')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
              </WhatsAppButton>
            </ProductCard>
            <ProductCard>
              <ProductImage src={steelSheets} alt="Steel Sheets" />
              <ProductTitle>Steel Sheets</ProductTitle>
              <ProductDescription>
                Versatile sheets for roofing, fabrication, and more.
              </ProductDescription>
              <WhatsAppButton
                href={getWhatsAppLink('Steel Sheets')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enquire Now
              </WhatsAppButton>
            </ProductCard>
          </ProductGrid>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <ButtonLink to="/products" primary="true">
              View All Products
            </ButtonLink>
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
          style={{ maxWidth: '900px', width: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
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
