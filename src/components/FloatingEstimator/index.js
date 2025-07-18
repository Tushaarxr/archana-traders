// src/components/FloatingEstimator/index.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { steelCatalog } from '../../data/products';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 107, 53, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0);
  }
`;

const EstimatorButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${pulse} 2s infinite;
  border: none;
  background: linear-gradient(135deg, #FF6B35, #FF8E53);
  color: white;
  font-size: 24px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 20px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: ${slideUp} 0.4s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 16px;
    margin: 10px;
    max-height: 95vh;
    height: 95vh; /* Fixed height for mobile */
    overflow-y: hidden; /* Remove scroll */
    display: flex;
    flex-direction: column;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.heading};

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 4px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 12px; /* Reduced padding for mobile */
  }
`;

const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CountryCode = styled.div`
  background: #f8f9fa;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  padding: 12px 14px;
  font-weight: 600;
  color: #666;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhoneInput = styled(Input)`
  flex: 1;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 12px; /* Reduced padding for mobile */
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.95rem;
    margin-top: auto; 
    flex-shrink: 0; /* Prevent button from shrinking */
  }
`;
const MobileFormContainer = styled.div`
  @media (max-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
  }
`;

const StatusMessage = styled.div`
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 6px;
  text-align: center;
  font-weight: 500;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const FloatingEstimator = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAutoOpened, setHasAutoOpened] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        product: '',
        quantity: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        info: { error: false, msg: null }
    });

    // Auto-open after 30 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasAutoOpened) {
                setIsOpen(true);
                setHasAutoOpened(true);
            }
        }, 30000); // 30 seconds

        return () => clearTimeout(timer);
    }, [hasAutoOpened]);

    // Get all products for dropdown
    const getAllProducts = () => {
        const products = [];
        steelCatalog.forEach(category => {
            category.subcategories.forEach(subcat => {
                subcat.products.forEach(product => {
                    products.push({
                        value: product.name,
                        label: `${product.name} (${category.name})`
                    });
                });
            });
        });
        return products;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, info: { error: false, msg: null } });

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("mobile", `+91-${formData.mobile}`);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("product", formData.product);
        formDataToSend.append("quantity", `${formData.quantity} Tons`);
        formDataToSend.append("access_key", "7fea1f32-4675-4164-abf9-41a5971baef7");
        formDataToSend.append("subject", "Free Estimator Request - Archana Traders");
        formDataToSend.append("from_name", "Archana Traders - Free Estimator");
        formDataToSend.append("replyto", formData.email);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const result = await response.json();

            if (result.success) {
                setStatus({
                    submitting: false,
                    info: { error: false, msg: "Request submitted! We'll send you a quote soon." }
                });

                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    product: '',
                    quantity: ''
                });

                setTimeout(() => {
                    setIsOpen(false);
                    setStatus({ submitting: false, info: { error: false, msg: null } });
                }, 3000);
            } else {
                setStatus({
                    submitting: false,
                    info: { error: true, msg: "Something went wrong. Please try again." }
                });
            }
        } catch (error) {
            setStatus({
                submitting: false,
                info: { error: true, msg: "Network error. Please try again." }
            });
        }
    };

    const closeModal = () => {
        setIsOpen(false);
        setStatus({ submitting: false, info: { error: false, msg: null } });
    };

    return (
        <>
            <EstimatorButton onClick={() => setIsOpen(true)} title="Free Estimator">
                💰
            </EstimatorButton>

            {isOpen && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={closeModal}>×</CloseButton>

                        <FormTitle>Get Free Price Estimate</FormTitle>

                        <form onSubmit={handleSubmit} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            <MobileFormContainer>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Mobile Number</Label>
                                    <PhoneInputContainer>
                                        <CountryCode>+91</CountryCode>
                                        <PhoneInput
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="1234567890"
                                            pattern="[0-9]{10}"
                                            required
                                        />
                                    </PhoneInputContainer>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label>I want quotes for</Label>
                                    <Select
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a product</option>
                                        {getAllProducts().map((product, index) => (
                                            <option key={index} value={product.value}>
                                                {product.label}
                                            </option>
                                        ))}
                                    </Select>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Quantity (in Tons)</Label>
                                    <Input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder="Enter quantity in tons"
                                        min="0.1"
                                        step="0.1"
                                        required
                                    />
                                </FormGroup>
                            </MobileFormContainer>

                            <SubmitButton type="submit" disabled={status.submitting}>
                                {status.submitting ? 'Getting Price...' : 'Get Price'}
                            </SubmitButton>

                            {status.info.msg && (
                                <StatusMessage className={status.info.error ? 'error' : 'success'}>
                                    {status.info.msg}
                                </StatusMessage>
                            )}
                        </form>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};

export default FloatingEstimator;
