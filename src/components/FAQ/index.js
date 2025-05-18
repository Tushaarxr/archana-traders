// src/components/FAQ/index.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background: white;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const FAQItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  background: ${({ theme, isOpen }) => 
    isOpen ? theme.colors.primary : 'white'};
  color: ${({ theme, isOpen }) => 
    isOpen ? 'white' : theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  font-family: ${({ theme }) => theme.fonts.heading};
  
  &:hover {
    background: ${({ theme, isOpen }) => 
      isOpen ? theme.colors.primary : theme.colors.lightGray};
  }
  
  &:focus {
    outline: none;
  }
`;

const Icon = styled.span`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
`;

const FAQAnswer = styled.div`
  padding: ${({ isOpen, theme }) => 
    isOpen ? theme.spacing.md : '0 ' + theme.spacing.md};
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const faqData = [
  {
    id: 1,
    question: "What are the payment terms for bulk orders?",
    answer: "For bulk orders, we offer flexible payment terms including advance payment, partial payment, or credit terms for regular customers. Please contact our sales team for specific details based on your requirements."
  },
  {
    id: 2,
    question: "Do you provide delivery services?",
    answer: "Yes, we offer delivery services across the region. Delivery charges depend on the location and order volume. For large orders, we may offer free delivery within city limits."
  },
  {
    id: 3,
    question: "What quality standards do your steel products meet?",
    answer: "All our steel products comply with BIS (Bureau of Indian Standards) specifications and are sourced from ISO-certified manufacturers. We ensure that every product meets industry quality benchmarks."
  },
  {
    id: 4,
    question: "How do I get a price quotation?",
    answer: "You can request a quotation by calling us directly, sending a WhatsApp message, using our contact form, or visiting our store. Please specify the product details, quantity, and delivery location for an accurate quote."
  },
  {
    id: 5,
    question: "Do you offer custom sizes for steel products?",
    answer: "Yes, we can arrange custom sizes for most of our steel products. Please note that custom orders may require additional processing time and might be subject to minimum order quantities."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);
  
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <FAQSection>
      <Container>
        <Title>Frequently Asked Questions</Title>
        
        {faqData.map((item, index) => (
          <FAQItem key={item.id}>
            <FAQQuestion 
              isOpen={openItem === index}
              onClick={() => toggleItem(index)}
            >
              {item.question}
              <Icon isOpen={openItem === index}>+</Icon>
            </FAQQuestion>
            <FAQAnswer isOpen={openItem === index}>
              {item.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </Container>
    </FAQSection>
  );
};

export default FAQ;
