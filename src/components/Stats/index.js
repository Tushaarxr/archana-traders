// src/components/Stats/index.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StatsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const StatsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  padding: 0 24px;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const StatTitle = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

const stats = [
  { id: 1, number: 15, symbol: '+', title: 'Years of Experience' },
  { id: 2, number: 500, symbol: '+', title: 'Satisfied Clients' },
  { id: 3, number: 10000, symbol: '+', title: 'Tons Delivered' },
  { id: 4, number: 25, symbol: '+', title: 'Steel Products' }
];

const Stats = () => {
  return (
    <StatsSection>
      <StatsContainer>
        {stats.map(stat => (
          <StatItem key={stat.id}>
            <StatNumber>
              <CountUp end={stat.number} duration={2.5} /> {stat.symbol}
            </StatNumber>
            <StatTitle>{stat.title}</StatTitle>
          </StatItem>
        ))}
      </StatsContainer>
    </StatsSection>
  );
};

// Animated counter component
const CountUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = countRef.current; // Store current ref value

    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    if (isVisible) {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };
      
      animationFrame = requestAnimationFrame(step);
    }
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);
  
  return <span ref={countRef}>{count}</span>;
};

export default Stats;
