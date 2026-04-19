import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';
import logo from '../../img/لوجو مزارع شهيلا.jpg';

export const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => setMenuOpen(false);

  const handleLangChange = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
    setLangOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container" dir={lang === 'ar' ? 'rtl' : 'ltr'}>

        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Shaila Logo" className="logo-img" />
        </Link>

        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick} className={isActive('/') ? 'active' : ''}>{t('الرئيسية', 'Home')}</Link></li>
          <li><Link to="/about" onClick={handleLinkClick} className={isActive('/about') ? 'active' : ''}>{t('من نحن', 'About')}</Link></li>
          <li><Link to="/products" onClick={handleLinkClick} className={isActive('/products') ? 'active' : ''}>{t('منتجاتنا', 'Products')}</Link></li>
          <li><Link to="/farms" onClick={handleLinkClick} className={isActive('/farms') ? 'active' : ''}>{t('مزارعنا', 'Farms')}</Link></li>
          <li><Link to="/locations" onClick={handleLinkClick} className={isActive('/locations') ? 'active' : ''}>{t('مواقعنا', 'Locations')}</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick} className={isActive('/contact') ? 'active' : ''}>{t('تواصل معنا', 'Contact')}</Link></li>
        </ul>

        <div className="lang-dropdown">
          <div className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
            🌐 {lang.toUpperCase()}
            <span className={`arrow ${langOpen ? 'open' : ''}`}>▾</span>
          </div>

          <div className={`lang-menu ${langOpen ? 'show' : ''}`}>
            <div onClick={handleLangChange}>
              {lang === 'en' ? '🇪🇬 العربية' : '🇺🇸 English'}
            </div>
          </div>
        </div>

      </div>

      <div
        className={`menu-overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </nav>
  );
};