import React from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">SHAILA</h3>
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
              {t('البريد الإلكتروني', 'Email')}: info@shaila.com
            </p>
            <p className="footer-info">
              {t('الهاتف', 'Phone')}: +966 XX XXX XXXX
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 SHAILA. {t('جميع الحقوق محفوظة', 'All rights reserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};
