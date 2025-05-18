// src/components/Navbar/index.js
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Nav,
  NavContainer,
  LogoContainer,
  Logo,
  NavMenu,
  NavItem,
  MobileIcon,
  NavLinks,
  DropdownMenu,
  DropdownItem,
  CenteredSearchContainer,
  ChevronDownIcon
} from './NavbarElements';

import { steelCatalog } from '../../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef();

  // Toggle mobile menu
  const toggle = () => setIsOpen(!isOpen);

  // Sticky navbar effect
  const changeNav = () => setScrollNav(window.scrollY >= 80);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  // Close mobile menu on link click
  const closeMenu = () => isOpen && setIsOpen(false);

  // Dropdown open/close handlers
  const handleDropdown = (open) => setDropdownOpen(open);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  // Search submit handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      closeMenu();
    }
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <LogoContainer to="/">
          <Logo>Archana Traders</Logo>
        </LogoContainer>

        <CenteredSearchContainer onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            aria-label="Search products"
          />
          <button type="submit" aria-label="Search">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="9" r="7" />
              <line x1="16" y1="16" x2="13.5" y2="13.5" />
            </svg>
          </button>
        </CenteredSearchContainer>

        <MobileIcon onClick={toggle}>
          {isOpen ? <span>✕</span> : <span>☰</span>}
        </MobileIcon>

        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks
              to="/"
              active={(location.pathname === '/').toString()}
              onClick={closeMenu}
            >
              Home
            </NavLinks>
          </NavItem>

          {/* Products Dropdown */}
          <NavItem
            onMouseEnter={() => handleDropdown(true)}
            onMouseLeave={() => handleDropdown(false)}
            ref={dropdownRef}
            style={{ position: 'relative' }}
          >
            <NavLinks
              to="/products"
              active={location.pathname.startsWith('/products').toString()}
              onClick={closeMenu}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Products
              <ChevronDownIcon open={dropdownOpen} />
            </NavLinks>
            <DropdownMenu open={dropdownOpen}>
              {steelCatalog.map((category) => (
                <DropdownItem
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  onClick={closeMenu}
                >
                  {category.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </NavItem>

          <NavItem>
            <NavLinks
              to="/contact"
              active={(location.pathname === '/contact').toString()}
              onClick={closeMenu}
            >
              Contact
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
