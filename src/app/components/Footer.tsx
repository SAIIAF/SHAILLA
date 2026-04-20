import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, MapPin, Home, Info, Package, Leaf } from 'lucide-react';
import LogoImg from '../../img/bckfarms/clients/لوجو مزارع شهيلا.jpg';
import './Footer.css';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">

      {/* Brand Section */}
      <section className="brand-promise-section">
        <div className="brand-content">
          <div className="shehaila-hero-badgee">
            <img src={LogoImg} alt="shehaila Logo" className="shehaila-hero-logo" />
          </div>

          <h2 className="brand-title">Shehaila | شهيلا</h2>

          <p className="brand-tagline">
            {t('الجودة التزامنا... والثقة أساسنا', 'Quality is our commitment, trust is our foundation')}
          </p>
        </div>
      </section>

      <div className="footer-container">
        <div className="footer-content">

          {/* Company */}
          <div className="footer-section">
            <h3 className="footer-title">SHEHAILA FARMS</h3>
            <p className="footer-description">
              {t(
                'شركة رائدة في إنتاج البيض وتربية الدواجن والزراعة المستدامة',
                'A leading company in egg production, poultry farming, and sustainable agriculture'
              )}
            </p>
          </div>

          {/* Links */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link-item">
                  <Home size={16} />
                  {t('الرئيسية', 'Home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link-item">
                  <Info size={16} />
                  {t('من نحن', 'About')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link-item">
                  <Package size={16} />
                  {t('منتجاتنا', 'Products')}
                </Link>
              </li>
              <li>
                <Link to="/farms" className="footer-link-item">
                  <Leaf size={16} />
                  {t('مزارعنا', 'Farms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Links */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('تواصل معنا', 'Contact Us')}</h4>
            <ul className="footer-links">
              <li>
                <Link to="/locations" className="footer-link-item">
                  <MapPin size={16} />
                  {t('مواقعنا', 'Locations')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link-item">
                  <Mail size={16} />
                  {t('اتصل بنا', 'Contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="footer-section">
            <h4 className="footer-heading">{t('معلومات الاتصال', 'Contact Information')}</h4>

            <a href="mailto:social@afaqsaleh.com" className="footer-link-item">
              <Mail size={16} />
              <span>social@afaqsaleh.com</span>
            </a>

            <a href="tel:0544131444" className="footer-link-item">
              <Phone size={16} />
              <span>0544131444</span>
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 SHEHAILA. {t('جميع الحقوق محفوظة', 'All rights reserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};