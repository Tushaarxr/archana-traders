// src/components/SEO/index.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = 'Archana Traders - Quality Steel Products';
  const defaultDescription = 'Archana Traders is a leading supplier of high-quality steel products including TMT bars, steel pipes, sheets, and structural steel.';
  const defaultKeywords = 'steel products, TMT bars, steel pipes, steel sheets, structural steel, steel supplier, Archana Traders';
  const defaultImage = '/logo.png'; // Replace with actual logo path
  const siteUrl = 'https://Archanatraders.com'; // Replace with actual domain

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={url || siteUrl} />
    </Helmet>
  );
};

export default SEO;
