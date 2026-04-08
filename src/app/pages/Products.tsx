import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Microscope, Thermometer, Award, Egg, Package, Leaf } from 'lucide-react';
import './Products.css';

// استيراد الصور من الجهاز
import LogoImg from '../../img/لوجو مزارع شهيلا.png'; // عدّل المسار واسم الصورة حسب الملف عندك
import MainEggsImg from '../../img/egs1.jpeg';
import RedEggsImg from '../../img/egs2.jpeg';
import FeedImg from '../../img/3laf.jpeg';
import FertilizerImg from '../../img/semad.jpg';
import HeroImg from '../../img/Image_20260408_053724.png'; // عدّل المسار واسم الصورة

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M+`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K+`;
  }
  return num.toString();
};

const Products: React.FC = () => {
  const { t, lang } = useLanguage();

  const coreProduct = {
    title: t('بيض أبيض طازج', 'Fresh White Eggs'),
    description: t(
      'بيض طازج يوميًا من مزارع شهيلا، يتم إنتاجه تحت أعلى معايير الجودة والسلامة الغذائية. نضمن لك بيضًا طبيعيًا 100% غنيًا بالبروتين والفيتامينات الأساسية لصحة عائلتك.',
      'Fresh daily eggs from Shaila Farms, produced under the highest quality and food safety standards. We guarantee 100% natural eggs rich in protein and essential vitamins for your family\'s health.'
    ),
    features: [
      t('طازج يوميًا من المزرعة', 'Farm fresh daily'),
      t('غني بالبروتين والفيتامينات', 'Rich in protein & vitamins'),
      t('خالٍ من الهرمونات', 'Hormone-free'),
      t('معتمد من الجهات الصحية', 'Health certified')
    ],
    sizes: [
      { size: t('صغير', 'Small'), weight: '45-50g', icon: '🥚' },
      { size: t('متوسط', 'Medium'), weight: '53-58g', icon: '🥚' },
      { size: t('كبير', 'Large'), weight: '63-68g', icon: '🥚' }
    ],
    image: MainEggsImg
  };

  const expandingProducts = [
    {
      title: t('البيض الأحمر', 'Red Eggs'),
      description: t(
        'قريبًا سنقدم البيض الأحمر الطبيعي الغني بالعناصر الغذائية، المنتج خصيصًا لتلبية احتياجات الأسر السعودية التي تبحث عن التنوع والجودة العالية.',
        'Coming soon: Natural red eggs rich in nutrients, specially produced to meet the needs of Saudi families seeking variety and premium quality.'
      ),
      status: t('قريبًا', 'Coming Soon'),
      icon: <Egg className="product-icon" />,
      image: RedEggsImg
    },
    {
      title: t('الأعلاف الحيوانية', 'Animal Feed'),
      description: t(
        'نعمل على تطوير أعلاف متخصصة عالية الجودة لتعزيز صحة الدواجن وزيادة الإنتاجية، مصنوعة من مكونات طبيعية مختارة بعناية لضمان أفضل النتائج.',
        'We are developing specialized high-quality feed to enhance poultry health and boost productivity, made from carefully selected natural ingredients to ensure optimal results.'
      ),
      status: t('قيد التطوير', 'In Development'),
      icon: <Package className="product-icon" />,
      image: FeedImg
    },
    {
      title: t('الأسمدة العضوية', 'Organic Fertilizers'),
      description: t(
        'أسمدة عضوية طبيعية 100% من مخلفات المزرعة، مصممة لتحسين خصوبة التربة وزيادة إنتاجية المحاصيل بطريقة صديقة للبيئة ومستدامة.',
        '100% natural organic fertilizers from farm waste, designed to improve soil fertility and increase crop yield in an eco-friendly and sustainable way.'
      ),
      status: t('قيد التطوير', 'In Development'),
      icon: <Leaf className="product-icon" />,
      image: FertilizerImg
    }
  ];

  const qualityStandards = [
    {
      icon: <Microscope size={48} />,
      title: t('فحوصات مختبرية شاملة', 'Comprehensive Lab Testing'),
      description: t(
        'نجري فحوصات مختبرية دورية على جميع منتجاتنا للتأكد من خلوها من الملوثات والبكتيريا الضارة',
        'We conduct regular lab tests on all our products to ensure they are free from contaminants and harmful bacteria'
      )
    },
    {
      icon: <Thermometer size={48} />,
      title: t('سلسلة تبريد متكاملة', 'Complete Cold Chain'),
      description: t(
        'نحافظ على درجات حرارة مثالية طوال رحلة المنتج من المزرعة إلى منزلك لضمان الطازجية',
        'We maintain optimal temperatures throughout the product journey from farm to your home to ensure freshness'
      )
    },
    {
      icon: <Award size={48} />,
      title: t('شهادات جودة دولية', 'International Certifications'),
      description: t(
        'حاصلون على شهادات جودة معتمدة من هيئات محلية وعالمية تضمن التزامنا بأعلى المعايير',
        'Certified with quality standards from local and international bodies ensuring our commitment to excellence'
      )
    }
  ];

  const productionStats = [
    { value: 1000000, label: t('بيضة يوميًا', 'Eggs Daily'), suffix: '+' },
    { value: 5, label: t('مزارع متطورة', 'Modern Farms'), suffix: '' },
    { value: 100, label: t('نقطة بيع محلية', 'Local Outlets'), suffix: '%' }
  ];

  return (
    <div className="products-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section
        className="shaila-hero"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="shaila-hero-content">
          <div className="shaila-hero-badge">
            <img src={LogoImg} alt="Shaila Logo" className="shaila-hero-logo" />
          </div>
          <h1 className="shaila-hero-title">{t('شهيلا و لا أشهى', 'Shaila... Nothing Tastes Better')}</h1>
          <p className="shaila-hero-subtitle">
            {t(
              'نقدم أجود أنواع البيض الطازج من مزارعنا المحلية بأعلى معايير الجودة والسلامة الغذائية',
              'We deliver premium fresh eggs from our local farms with the highest quality and food safety standards'
            )}
          </p>

          <div className="shaila-hero-stats-grid">
            <div className="shaila-hero-stat-item">
              <div className="shaila-stat-value">{formatNumber(1000000)}</div>
              <div className="shaila-stat-label">{t('إنتاج يومي', 'Daily Production')}</div>
            </div>
            <div className="shaila-hero-stat-item">
              <div className="shaila-stat-value">100%</div>
              <div className="shaila-stat-label">{t('طبيعي', 'Natural')}</div>
            </div>
            <div className="shaila-hero-stat-item">
              <div className="shaila-stat-value">24h</div>
              <div className="shaila-stat-label">{t('توزيع سريع', 'Fast Delivery')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section */}
      <section className="core-products-section">
        <div className="section-header">
          <h2 className="section-title">{t('منتجاتنا الأساسية', 'Our Core Products')}</h2>
          <p className="section-subtitle">
            {t('منتجات طازجة يوميًا بأعلى معايير الجودة', 'Fresh daily products with the highest quality standards')}
          </p>
        </div>
        <div className={`core-product-container ${lang === 'ar' ? 'rtl-layout' : 'ltr-layout'}`}>
          <div className="product-image-wrapper">
            <img src={coreProduct.image} alt={coreProduct.title} className="product-main-image" />
            <div className="image-badge">{t('الأكثر مبيعًا', 'Best Seller')}</div>
          </div>
          <div className="product-info-card">
            <span className="product-category">{t('المنتج الرئيسي', 'Main Product')}</span>
            <h3 className="product-title">{coreProduct.title}</h3>
            <p className="product-description">{coreProduct.description}</p>
            <div className="product-features">
              <h4 className="features-title">{t('المميزات', 'Features')}</h4>
              <ul className="features-list">
                {coreProduct.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="egg-sizes-section">
              <h4 className="sizes-title">{t('الأحجام المتوفرة', 'Available Sizes')}</h4>
              <div className="sizes-grid">
                {coreProduct.sizes.map((size, index) => (
                  <div key={index} className="size-card">
                    <div className="size-name">{size.size}</div>
                    <div className="size-weight">{size.weight}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanding Products Section */}
      <section className="expanding-products-section">
        <div className="section-header">
          <h2 className="section-title">{t('منتجات قيد التوسع', 'Expanding Product Line')}</h2>
          <p className="section-subtitle">
            {t('منتجات جديدة قادمة لخدمة عملائنا بشكل أفضل', 'New products coming to serve our customers better')}
          </p>
        </div>
        <div className="expanding-products-grid">
          {expandingProducts.map((product, index) => (
            <div key={index} className="expanding-product-card">
              <div className="expanding-card-image">
                <img src={product.image} alt={product.title} />
                <div className="status-badge">{product.status}</div>
              </div>
              <div className="expanding-card-content">
                <div className="card-icon-wrapper">{product.icon}</div>
                <h3 className="expanding-card-title">{product.title}</h3>
                <p className="expanding-card-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="quality-assurance-section">
        <div className="section-header">
          <h2 className="section-title">{t('ضمان الجودة والسلامة', 'Quality & Safety Assurance')}</h2>
          <p className="section-subtitle">
            {t('نلتزم بأعلى معايير الجودة والسلامة الغذائية في كل مراحل الإنتاج', 'We adhere to the highest quality and food safety standards at every stage of production')}
          </p>
        </div>
        <div className="quality-standards-grid">
          {qualityStandards.map((standard, index) => (
            <div key={index} className="quality-standard-card">
              <div className="quality-icon-wrapper">{standard.icon}</div>
              <h4 className="quality-standard-title">{standard.title}</h4>
              <p className="quality-standard-description">{standard.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Production Capacity Section */}
      <section className="production-capacity-section">
        <div className="section-header">
          <h2 className="section-title">{t('قدراتنا الإنتاجية', 'Production Capacity')}</h2>
          <p className="section-subtitle">{t('أرقام تعكس التزامنا بتلبية احتياجات السوق المحلي', 'Numbers reflecting our commitment to meet local market needs')}</p>
        </div>
        <div className="production-stats-grid">
          {productionStats.map((stat, index) => (
            <div key={index} className="production-stat-card">
              <div className="production-stat-value">{formatNumber(stat.value)}{stat.suffix}</div>
              <div className="production-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="brand-promise-section">
        <div className="brand-content">
          <div className="shaila-hero-badge" style={{ marginBottom: '1.5rem'}}>
            <img src={LogoImg} alt="Shaila Logo" className="shaila-hero-logo" />
          </div>
          <h2 className="brand-title">Shaila | شهيلا</h2>
          <p className="brand-tagline">{t('الجودة التزامنا... والثقة أساسنا', 'Quality is our commitment, trust is our foundation')}</p>
        </div>
      </section>
    </div>
  );
};

export default Products;