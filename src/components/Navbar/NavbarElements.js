// src/components/Navbar/NavbarElements.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => scrollNav ? 'white' : 'transparent'};
  height: 80px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
  box-shadow: ${({ scrollNav, theme }) => scrollNav ? theme.shadows.small : 'none'};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transition: 0.8s all ease;
  }
`;



export const LogoContainer = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 60px;
    width: 100%;
  }
`;

export const NavLinks = styled(Link)`
  color: ${({ theme, active }) => active === 'true' ? theme.colors.primary : theme.colors.darkGray};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: ${({ active }) => active === 'true' ? 'bold' : 'normal'};
  border-bottom: ${({ active, theme }) => active === 'true' ? `3px solid ${theme.colors.primary}` : 'none'};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      transition: 0.2s ease-in-out;
    }
  }
`;






export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  margin-left: 24px;

  input {
    padding: 6px 12px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-radius: 4px 0 0 4px;
    font-size: 1rem;
    outline: none;
  }

  button {
    padding: 6px 12px;
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.darkGray};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;


// Adjust NavContainer for new layout





export const CenteredSearchContainer = styled.form`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    padding: 10px 16px;
    border: none;
    border-radius: 999px 0 0 999px;
    font-size: 1rem;
    background: #f5f6fa;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    min-width: 220px;
    max-width: 320px;
    transition: box-shadow 0.2s;
    outline: none;
    border: 1px solid #e0e0e0;

    &:focus {
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  button {
    padding: 0 16px;
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-radius: 0 999px 999px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    height: 42px;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 180px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border-radius: 8px;
  margin-top: 10px;
  opacity: ${({ open }) => open ? 1 : 0};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  transform: translateY(${({ open }) => open ? '0' : '-10px'});
  transition: all 0.22s cubic-bezier(.4,0,.2,1);
  z-index: 999;
  padding: 8px 0;
`;

export const DropdownItem = styled(Link)`
  padding: 10px 24px;
  display: block;
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ChevronDownIcon = styled(({ open, ...props }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" {...props}>
    <polyline
      points="6 8 10 12 14 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: 'transform 0.2s',
        transform: open ? 'rotate(180deg)' : 'none',
      }}
    />
  </svg>
))`
  margin-left: 2px;
  color: #888;
  vertical-align: middle;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
`;