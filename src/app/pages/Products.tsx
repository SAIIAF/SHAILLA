import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Microscope, Thermometer, Award, Egg, Package, Leaf } from 'lucide-react';
import './Products.css';

import LogoImg from '../../img/bckfarms/clients/لوجو مزارع شهيلا.jpg';
import MainEggsImg from '../../img/egs1.jpeg';
import RedEggsImg from '../../img/redegg.jpg';
import FeedImg from '../../img/3laf.jpeg';
import FertilizerImg from '../../img/semad.jpg';
import HeroImg from '../../img/Gemini_Generated_Image_104a6t104a6t104a.png';

import SmallEggImg from '../../img/MM.jpg';
import MediumEggImg from '../../img/MM.jpg';
import MediumEggImg2 from '../../img/MMM.jpg';
import LargeEggImg from '../../img/LL.jpg';
import largeEggImg1 from '../../img/LLLL.jpg'
import largeEggImg2 from '../../img/LLL.jpg'
import largeEggImg3 from '../../img/LLLLL.jpg'
import gampoEggImg from '../../img/XL.jpg';
// Gallery image data for product categories
const getGalleryData = (lang: string) => ({
  small: [
    {
      image: MediumEggImg2,
      descriptionAr: 'بيض شهيلا كبير 12طبق *30  ( L )',
      description: 'Large Chehila Eggs, 12 trays * 30 (L)',
      titleAr: 'متوسط',
      titleEn: 'Medium'
    },
  ],
  medium: [
    {
      image: MediumEggImg,
      descriptionAr: 'بيض شهيلا فاخر وسط (30 * 10 طبق) -M',
      descriptionEn: 'Shehaila Premium Medium Eggs (30 * 10 Tray) - M',
      titleAr: 'متوسط',
      titleEn: 'Medium'
    },
    
  ],
  large: [
    {
      image: LargeEggImg,
      descriptionAr: 'بيض شهيلا مغلف فاخر (30 * 10 طبق) -L',
      descriptionEn: 'Shehaila Premium Large Eggs (30 * 10 Tray) - L',
      titleAr: 'كبير',
      titleEn: 'Large'
    },
    {
      image: largeEggImg1,
      descriptionAr: 'بيض شهيلا مغلف فاخر (15 * 20 طبق) -L',
      descriptionEn: 'Shehaila Premium Eggs (15 * 20 Tray) - L',
      titleAr: 'كبير طازج',
      titleEn: 'Fresh Large'
    },
    {
      image: largeEggImg2,
      descriptionAr: 'بيض شهيلا مغلف (50 علبة *6) - L',
      descriptionEn: 'Shahila Eggs (50 Packs * 6) - L',
      titleAr: 'جودة كبيرة',
      titleEn: 'Premium Large'
    },
    {
      image: largeEggImg3,
      descriptionAr: 'بيض شهيلا كيس  12 *30  ( S )',
      descriptionEn: 'Shahila eggs, bag 12 * 30 (S)',
      titleAr: 'جودة كبيرة',
      titleEn: 'Premium Large'
    },
  ],
  extraLarge: [
    {
      image: gampoEggImg,
      descriptionAr: 'بيض شهيلا فاخر (30 علبة *10) - XL',
      descriptionEn: 'Sheela Premium Eggs (30 x 10 Packs) - XL',
      titleAr: 'جامبو',
      titleEn: 'Extra Large'
    },
  ]
});

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M+`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K+`;
  }
  return num.toString();
};

// Image Gallery Component
interface GalleryImage {
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  titleAr: string;
  titleEn: string;
}

interface ProductGalleryProps {
  images: GalleryImage[];
  lang: string;
  mainImageRef?: React.RefObject<HTMLDivElement>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, lang, mainImageRef }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setMainImageIndex(index);
  };

  if (!images || images.length === 0) {
    return <p>Loading...</p>;
  }

  const currentImage = images[mainImageIndex] ?? images[0];

  const title = lang === 'ar' ? currentImage?.titleAr : currentImage?.titleEn;
  const description = lang === 'ar' ? currentImage?.descriptionAr : currentImage?.descriptionEn;
  return (
    <div className="product-gallery">
      <div className="gallery-main-container">
        <div ref={mainImageRef} className="gallery-main-image-wrapper">
          <img
            src={currentImage.image}
            alt={title}
            className="gallery-main-image"
          />
        </div>
        <div className="gallery-description">
          <h4 className="gallery-image-title">{title}</h4>
          <p className="gallery-image-text">{description}</p>
        </div>
      </div>

      <div className="gallery-thumbnails">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`gallery-thumbnail ${mainImageIndex === index ? 'active' : ''}`}
            aria-label={`Select image ${index + 1}`}
          >
            <img src={img.image} alt={lang === 'ar' ? img.titleAr : img.titleEn} />
          </button>
        ))}
      </div>
    </div>
  );
};


const Products: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(SmallEggImg);
  const [activeSize, setActiveSize] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'small' | 'medium' | 'large' | 'extraLarge'>('medium');
  const imageRef = React.useRef(null);
  const galleryRef = React.useRef(null);
  const mainImageRef = React.useRef<HTMLDivElement>(null);
  const coreProduct = {
    title: t('بيض أبيض طازج', 'Fresh White Eggs'),
    description: t(
      'بيض طازج يوميًا من مزارع شهيلا، يتم إنتاجه تحت أعلى معايير الجودة والسلامة الغذائية. نضمن لك بيضًا طبيعيًا 100% غنيًا بالبروتين والفيتامينات الأساسية لصحة عائلتك.',
      'Fresh daily eggs from Shehaila Farms, produced under the highest quality and food safety standards. We guarantee 100% natural eggs rich in protein and essential vitamins for your family\'s health.'
    ),
    features: [
      t('طازج يوميًا من المزرعة', 'Farm fresh daily'),
      t('غني بالبروتين والفيتامينات', 'Rich in protein & vitamins'),
      t('خالٍ من الهرمونات', 'Hormone-free'),
      t('معتمد من الجهات الصحية', 'Health certified')
    ],
    sizes: [
      { size: t('صغير', 'Small'), weight: '40-45g', image: SmallEggImg },
      { size: t('متوسط', 'Medium'), weight: '53-58g', image: MediumEggImg },
      { size: t('كبير', 'Large'), weight: '63-68g', image: LargeEggImg }
    ],
    image: MainEggsImg
  };

  const expandingProducts = [
    {
      title: t('البيض البني', 'Brown Eggs'),
      description: t(
        'قريبًا سنقدم البيض البني الطبيعي الغني بالعناصر الغذائية، المنتج خصيصًا لتلبية احتياجات الأسر التي تبحث عن التنوع والجودة العالية.',
        'Coming soon: Natural brown eggs rich in nutrients, specially produced to meet the needs of families seeking variety and premium quality.'
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
    { value: 600000, label: t('بيضة يوميًا', 'Eggs Daily'), suffix: '' },
    { value: 5, label: t('مزارع متطورة', 'Modern Farms'), suffix: '' },
    { value: 100, label: t('مراكز توزيع محلية', 'Local Outlets'), suffix: '%' }
  ];

  return (
    <div className="products-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section
        className="shehaila-hero"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="shehaila-hero-content">
          <div className="shehaila-hero-badge">
            <img src={LogoImg} alt="shehaila Logo" className="shehaila-hero-logo" />
          </div>
          <h1 className="shehaila-hero-title">{t('شهيلا و لا أشهى', 'Shehaila... Nothing Tastes Better')}</h1>
          <p className="shehaila-hero-subtitle">
            {t(
              'نقدم أجود أنواع البيض الطازج من مزارعنا المحلية بأعلى معايير الجودة والسلامة الغذائية',
              'We deliver premium fresh eggs from our local farms with the highest quality and food safety standards'
            )}
          </p>

          <div className="shehaila-hero-stats-grid">
            <div className="shehaila-hero-stat-item">
              <div className="shehaila-stat-value">{formatNumber(1000000)}</div>
              <div className="shehaila-stat-label">{t('إنتاج يومي', 'Daily Production')}</div>
            </div>
            <div className="shehaila-hero-stat-item">
              <div className="shehaila-stat-value">100%</div>
              <div className="shehaila-stat-label">{t('طبيعي', 'Natural')}</div>
            </div>
            <div className="shehaila-hero-stat-item">
              <div className="shehaila-stat-value">24h</div>
              <div className="shehaila-stat-label">{t('توزيع سريع', 'Fast Delivery')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Products Section with Gallery */}
      <section className="core-products-section">
        <div className="section-header">
          <h2 className="section-title">{t('منتجاتنا الأساسية', 'Our Main Products')}</h2>
          <p className="section-subtitle">
            {t('منتجات طازجة يوميًا بأعلى معايير الجودة', 'Fresh daily products with the highest quality standards')}
          </p>
        </div>

        {/* Product Gallery */}
        <div ref={galleryRef} className={`core-product-container ${lang === 'ar' ? 'rtl-layout' : 'ltr-layout'}`}>
          <ProductGallery
            images={getGalleryData(lang)[activeCategory]}
            lang={lang}
            mainImageRef={mainImageRef}
          />
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
            <div className="category-buttons-section">
              <h4 className="sizes-title">{t('الأحجام المتوفرة', 'Available Sizes')}</h4>
              <div className="category-buttons-grid">
                <button
                  className={`category-button ${activeCategory === 'small' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory('small');
                    if (window.innerWidth <= 1023) {
                      setTimeout(() => {
                        mainImageRef.current?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }, 100);
                    }
                  }}
                >
                  <div className="button-text">{t('S', 'S')}</div>
                </button>
                <button
                  className={`category-button ${activeCategory === 'medium' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory('medium');
                    if (window.innerWidth <= 1023) {
                      setTimeout(() => {
                        mainImageRef.current?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }, 100);
                    }
                  }}
                >
                  <div className="button-text">{t('M', 'M')}</div>
                </button>
                <button
                  className={`category-button ${activeCategory === 'large' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory('large');
                    if (window.innerWidth <= 1023) {
                      setTimeout(() => {
                        mainImageRef.current?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }, 100);
                    }
                  }}
                >
                  <div className="button-text">{t('L', 'L')}</div>
                </button>
                <button
                  className={`category-button ${activeCategory === 'extraLarge' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory('extraLarge');
                    if (window.innerWidth <= 1023) {
                      setTimeout(() => {
                        mainImageRef.current?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }, 100);
                    }
                  }}
                >
                  <div className="button-text">{t('XL', 'XL')}</div>
                </button>
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


    </div>
  );
};

export default Products;
