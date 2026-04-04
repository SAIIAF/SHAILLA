import React from 'react';
import { MdLocationPin, MdApartment, MdPhone, MdEmail } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import './locations.css';

export const Locations: React.FC = () => {
  const { t } = useLanguage();

  const locations = [
    {
      city: t('الرياض', 'Riyadh'),
      type: t('المقر الرئيسي', 'Main Headquarters'),
      address: t('طريق الملك فهد، حي الملقا', 'King Fahd Road, Al Malqa District'),
      phone: '+966 11 XXX XXXX',
      email: 'riyadh@shaila.com'
    },
    {
      city: t('جدة', 'Jeddah'),
      type: t('فرع رئيسي', 'Main Branch'),
      address: t('طريق الملك عبدالله، حي الزهراء', 'King Abdullah Road, Al Zahra District'),
      phone: '+966 12 XXX XXXX',
      email: 'jeddah@shaila.com'
    },
    {
      city: t('الدمام', 'Dammam'),
      type: t('فرع رئيسي', 'Main Branch'),
      address: t('شارع الخليج، حي الشاطئ', 'Al Khaleej Street, Al Shati District'),
      phone: '+966 13 XXX XXXX',
      email: 'dammam@shaila.com'
    },
    {
      city: t('مكة المكرمة', 'Makkah'),
      type: t('فرع', 'Branch'),
      address: t('طريق جدة السريع', 'Jeddah Expressway'),
      phone: '+966 12 XXX XXXX',
      email: 'makkah@shaila.com'
    },
    {
      city: t('المدينة المنورة', 'Madinah'),
      type: t('فرع', 'Branch'),
      address: t('طريق الملك عبدالعزيز', 'King Abdulaziz Road'),
      phone: '+966 14 XXX XXXX',
      email: 'madinah@shaila.com'
    },
    {
      city: t('الخبر', 'Khobar'),
      type: t('فرع', 'Branch'),
      address: t('شارع الأمير تركي', 'Prince Turki Street'),
      phone: '+966 13 XXX XXXX',
      email: 'khobar@shaila.com'
    },
    {
      city: t('الطائف', 'Taif'),
      type: t('فرع', 'Branch'),
      address: t('طريق الرياض', 'Riyadh Road'),
      phone: '+966 12 XXX XXXX',
      email: 'taif@shaila.com'
    },
    {
      city: t('بريدة', 'Buraidah'),
      type: t('فرع', 'Branch'),
      address: t('طريق الملك عبدالله', 'King Abdullah Road'),
      phone: '+966 16 XXX XXXX',
      email: 'buraidah@shaila.com'
    },
    {
      city: t('تبوك', 'Tabuk'),
      type: t('فرع', 'Branch'),
      address: t('شارع الأمير فهد بن سلطان', 'Prince Fahd bin Sultan Street'),
      phone: '+966 14 XXX XXXX',
      email: 'tabuk@shaila.com'
    }
  ];

  return (
    <div className="locations-page">
      {/* Hero Section */}
      <section className="locations-hero">
        <div className="locations-hero-overlay"></div>
        <div className="locations-hero-content">
          <h1>{t('مواقعنا', 'Our Locations')}</h1>
          <p>{t('نحن في خدمتكم في جميع أنحاء المملكة', 'We serve you across the Kingdom')}</p>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section">
        <div className="branches-container">
          <h2>{t('فروعنا ومواقعنا', 'Our Branches & Locations')}</h2>
          <div className="branches-grid">
            {locations.map((location, index) => (
              <div key={index} className="location-branch-card">
                <div className="location-icon-large modern-icon-large icon-primary">
                  <MdLocationPin size={40} color="#1E90FF" />
                </div>
                <h3>{location.city}</h3>
                <span className="location-type">{location.type}</span>
                <div className="location-details">
                  <p className="location-detail">
                    <span className="detail-icon modern-icon size-5 mr-2">
                      <MdApartment size={20} color="#FF6B6B" />
                    </span>
                    {location.address}
                  </p>
                  <p className="location-detail">
                    <span className="detail-icon modern-icon size-5 mr-2">
                      <MdPhone size={20} color="#28a745" />
                    </span>
                    {location.phone}
                  </p>
                  <p className="location-detail">
                    <span className="detail-icon modern-icon size-5 mr-2">
                      <MdEmail size={20} color="#FF6B6B" />
                    </span>
                    {location.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="coverage-section">
        <div className="coverage-container">
          <h2>{t('تغطية شاملة', 'Complete Coverage')}</h2>
          <p className="coverage-description">
            {t(
              'نفخر بتواجدنا في جميع المناطق الرئيسية في المملكة العربية السعودية. شبكة التوزيع الواسعة لدينا تضمن وصول منتجاتنا الطازجة إلى كل مكان بسرعة وكفاءة.',
              'We are proud of our presence in all major regions of Saudi Arabia. Our wide distribution network ensures that our fresh products reach everywhere quickly and efficiently.'
            )}
          </p>
          <div className="coverage-stats">
            <div className="coverage-stat">
              <div className="stat-num">15+</div>
              <div className="stat-text">{t('مدينة', 'Cities')}</div>
            </div>
            <div className="coverage-stat">
              <div className="stat-num">50+</div>
              <div className="stat-text">{t('نقطة توزيع', 'Distribution Points')}</div>
            </div>
            <div className="coverage-stat">
              <div className="stat-num">24/7</div>
              <div className="stat-text">{t('خدمة العملاء', 'Customer Service')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};