import React from 'react';
import { TestTube, Thermometer, CheckCircle2 } from 'lucide-react';
import { MdScience, MdAcUnit, MdVerified } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import './Products.css';

export const Products: React.FC = () => {
  const { t } = useLanguage();

  const productCategories = [
    {
      title: t('بيض أبيض طازج', 'Fresh White Eggs'),
      description: t('بيض طازج يوميًا من دجاج صحي ومعتنى به', 'Daily fresh eggs from healthy and well-cared chickens'),
      features: [
        t('طازج يوميًا', 'Fresh daily'),
        t('غني بالبروتين', 'Rich in protein'),
        t('معايير صحية عالية', 'High health standards')
      ],
      image: 'https://images.unsplash.com/photo-1773587534652-1c823227b555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGVnZ3MlMjBwb3VsdHJ5JTIwZmFybXxlbnwxfHx8fDE3NzUyNjYxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: t('بيض عضوي', 'Organic Eggs'),
      description: t('بيض من دجاج مربى بطريقة طبيعية 100%', 'Eggs from 100% naturally raised chickens'),
      features: [
        t('بدون مواد كيميائية', 'No chemicals'),
        t('تغذية طبيعية', 'Natural feed'),
        t('معتمد عضويًا', 'Certified organic')
      ],
      image: 'https://images.unsplash.com/photo-1772472023164-61a6f0da9200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZWdnJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzUyNjYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: t('بيض مغذى بالأوميغا-3', 'Omega-3 Enriched Eggs'),
      description: t('بيض غني بالأوميغا-3 لصحة أفضل', 'Eggs enriched with Omega-3 for better health'),
      features: [
        t('عالي الأوميغا-3', 'High Omega-3'),
        t('يدعم صحة القلب', 'Supports heart health'),
        t('غني بالفيتامينات', 'Rich in vitamins')
      ],
      image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVnZ3MlMjBiYXNrZXQlMjBuYXR1cmFsfGVufDF8fHx8MTc3NTI2NjE1NXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: t('منتجات الدواجن', 'Poultry Products'),
      description: t('دجاج طازج عالي الجودة', 'High-quality fresh chicken'),
      features: [
        t('طازج يوميًا', 'Fresh daily'),
        t('معالج صحيًا', 'Hygienically processed'),
        t('جودة ممتازة', 'Excellent quality')
      ],
      image: 'https://images.unsplash.com/photo-1538451825199-8605af521e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGlja2VuJTIwZmFybSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NTI2NjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="products-hero-overlay"></div>
        <div className="products-hero-content">
          <h1>{t('منتجاتنا', 'Our Products')}</h1>
          <p>{t('أجود المنتجات من مزارعنا إلى مائدتك', 'The finest products from our farms to your table')}</p>
        </div>
      </section>

      <section className="product-categories">
        <div className="categories-container">
          <h2 className="categories-title">{t('تصفح منتجاتنا', 'Browse Our Products')}</h2>
          <div className="categories-grid">
            {productCategories.map((category, index) => (
              <div key={index} className="product-category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="category-content">
                  <h3>{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                  <ul className="category-features">
                    {category.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-container">
          <h2>{t('ضمان الجودة', 'Quality Assurance')}</h2>
          <div className="quality-grid">
            <div className="quality-item">
              <div className="quality-icon modern-icon-large icon-accent">
                <MdScience size={60} color="#FF6B6B" />
              </div>
              <h4>{t('فحص مختبري', 'Laboratory Testing')}</h4>
              <p>{t('فحص دقيق لكل منتج قبل التوزيع', 'Rigorous testing of every product before distribution')}</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon modern-icon-large icon-primary">
                <MdAcUnit size={60} color="#1E90FF" />
              </div>
              <h4>{t('سلسلة تبريد متكاملة', 'Complete Cold Chain')}</h4>
              <p>{t('حفظ المنتجات بدرجات حرارة مثالية', 'Preserving products at optimal temperatures')}</p>
            </div>
            <div className="quality-item">
              <div className="quality-icon modern-icon-large icon-success">
                <MdVerified size={60} color="#28a745" />
              </div>
              <h4>{t('شهادات دولية', 'International Certifications')}</h4>
              <p>{t('معتمدون من أفضل الهيئات العالمية', 'Certified by the best international bodies')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

