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
  SearchSuggestions,
  SuggestionItem,
  ChevronDownIcon
} from './NavbarElements';

import { steelCatalog } from '../../data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef();
  const searchRef = useRef();
  const suggestionsRef = useRef();

  // Flatten all products for search
  const getAllProducts = () => {
    const products = [];
    steelCatalog.forEach(category => {
      category.subcategories.forEach(subcat => {
        subcat.products.forEach(product => {
          products.push({
            name: product.name,
            shortDesc: product.shortDesc || '',
            url: `/products/${category.slug}/${subcat.slug}/${product.slug}`,
            category: category.name,
            subcategory: subcat.name
          });
        });
      });
    });
    return products;
  };

  const allProducts = getAllProducts();

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
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setSelectedSuggestion(-1);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen, showSuggestions]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 0) {
      const filteredSuggestions = allProducts.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 8); // Limit to 8 suggestions
      
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
      setSelectedSuggestion(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedSuggestion(-1);
    }
  };

  // Handle keyboard navigation in suggestions
  const handleKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestion(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestion(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestion >= 0) {
          navigate(suggestions[selectedSuggestion].url);
          setSearchTerm('');
          setShowSuggestions(false);
          setSelectedSuggestion(-1);
        } else {
          handleSearch(e);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedSuggestion(-1);
        break;
      default:
        break;
    }
  };

  // Search submit handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowSuggestions(false);
      setSelectedSuggestion(-1);
      closeMenu();
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    navigate(suggestion.url);
    setSearchTerm('');
    setShowSuggestions(false);
    setSelectedSuggestion(-1);
  };

  // Handle search input focus
  const handleSearchFocus = () => {
    if (searchTerm.trim().length > 0 && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <LogoContainer to="/">
          <Logo>Archana Traders</Logo>
        </LogoContainer>

        <CenteredSearchContainer ref={searchRef} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={handleSearchFocus}
            onKeyDown={handleKeyDown}
            aria-label="Search products"
            autoComplete="off"
          />
          <button type="submit" aria-label="Search">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="9" r="7" />
              <line x1="16" y1="16" x2="13.5" y2="13.5" />
            </svg>
          </button>
          
          {showSuggestions && suggestions.length > 0 && (
            <SearchSuggestions ref={suggestionsRef}>
              {suggestions.map((suggestion, index) => (
                <SuggestionItem
                  key={index}
                  selected={selectedSuggestion === index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <div className="suggestion-main">
                    <strong>{suggestion.name}</strong>
                  </div>
                  <div className="suggestion-category">
                    {suggestion.category} → {suggestion.subcategory}
                  </div>
                </SuggestionItem>
              ))}
            </SearchSuggestions>
          )}
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
