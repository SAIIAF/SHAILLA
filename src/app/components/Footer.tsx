import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LogoImg from '../../img/bckfarms/clients/لوجو مزارع شهيلا.jpg'; 
import './Footer.css';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      {/* Brand Promise Section */}
            <section className="brand-promise-section">
              <div className="brand-content">
                <div className="shehaila-hero-badgee" style={{ marginBottom: '1.5rem' }}>
                  <img
                    src={LogoImg}
                    alt="shehaila Logo"
                    className="shehaila-hero-logo"
                    style={{ width: '300px', height: 'auto' }}
                  />
                </div>
                <h2 className="brand-title">Shehaila | شهيلا</h2>
                <p className="brand-tagline">{t('الجودة التزامنا... والثقة أساسنا', 'Quality is our commitment, trust is our foundation')}</p>
              </div>
            </section>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SHEHAILA FARMS</h3>
            <p className="footer-description">
              {t(
                'شركة رائدة في إنتاج البيض وتربية الدواجن والزراعة المستدامة',
                'A leading company in egg production, poultry farming, and sustainable agriculture'
              )}
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="footer-links">
              <li><Link to="/">{t('الرئيسية', 'Home')}</Link></li>
              <li><Link to="/about">{t('من نحن', 'About')}</Link></li>
              <li><Link to="/products">{t('منتجاتنا', 'Products')}</Link></li>
              <li><Link to="/farms">{t('مزارعنا', 'Farms')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{t('تواصل معنا', 'Contact Us')}</h4>
            <ul className="footer-links">
              <li><Link to="/locations">{t('مواقعنا', 'Locations')}</Link></li>
              <li><Link to="/contact">{t('اتصل بنا', 'Contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">{t('معلومات الاتصال', 'Contact Information')}</h4>
            <p className="footer-info">
              {t('البريد الإلكتروني', 'Email')}: "social@afaqsaleh.com" 
            </p>
            <p className="footer-info">
              {t('الهاتف', 'Phone')}: 0544131444
            </p>
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
