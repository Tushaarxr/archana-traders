// src/components/Loader/index.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ fullHeight }) => fullHeight ? '100vh' : '200px'};
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;

const Loader = ({ fullHeight = false }) => {
  return (
    <LoaderContainer fullHeight={fullHeight}>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;
