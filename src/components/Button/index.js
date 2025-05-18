// src/components/Button/index.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.secondary};
  white-space: nowrap;
  padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
  color: white;
  font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary, theme }) => primary ? theme.colors.secondary : theme.colors.primary};
  }
`;

export const ButtonLink = styled(Link)`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.secondary};
  white-space: nowrap;
  padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
  color: white;
  font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary, theme }) => primary ? theme.colors.secondary : theme.colors.primary};
  }
`;

export const WhatsAppButton = styled.a`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: #25D366; // WhatsApp green
  white-space: nowrap;
  padding: ${({ big }) => big ? '14px 48px' : '12px 30px'};
  color: white;
  font-size: ${({ fontBig }) => fontBig ? '20px' : '16px'};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #128C7E; // Darker WhatsApp green
  }
`;
