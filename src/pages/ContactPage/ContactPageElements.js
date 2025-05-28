// src/pages/ContactPage/ContactPageElements.js
import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  min-height: 100vh;
  
  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
  }
  
  .form-status {
    margin-top: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    text-align: center;
    
    &.success {
      background-color: #d4edda;
      color: #155724;
    }
    
    &.error {
      background-color: #f8d7da;
      color: #721c24;
    }
  }
`;

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
  }
  
  p {
    max-width: 800px;
    margin: 0 auto;
    font-family: ${({ theme }) => theme.fonts.body};
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactForm = styled.form`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    text-align: center;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.body};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(1, 37, 125, 0.2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(1, 37, 125, 0.2);
  }
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
  }
`;

export const ContactInfoContainer = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    text-align: center;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  align-items: flex-start;
`;

export const InfoIcon = styled.div`
  font-size: 1.5rem;
  margin-right: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

export const InfoText = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MapContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  height: 250px;
`;


// Add to your ContactPageElements.js
export const FormStatus = styled.div`
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;
