'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, Egg, TrendingUp, ArrowRight, MdApartment, Thermometer, Heart, Leaf } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { useLanguage } from '../context/LanguageContext';
import slide1 from '../../img/bckfarms/1.jpeg';
import slide2 from '../../img/bckfarms/2.jpeg';
import slide3 from '../../img/bckfarms/3.jpeg';
import slide4 from '../../img/bckfarms/4.jpeg';
import slide5 from '../../img/bckfarms/5.jpeg';
import slide6 from '../../img/bckfarms/6.jpeg';
import slide7 from '../../img/bckfarms/7.jpeg';

import prod1 from '../../img/bckfarms/6.jpeg';
import prod2 from '../../img/bckfarms/33.jpeg';

import sort1 from '../../img/bckfarms/7.jpeg';
import sort2 from '../../img/bckfarms/2.jpeg';

import pack1 from '../../img/bckfarms//44.jpeg';
import pack2 from '../../img/bckfarms/77.jpeg';

import farmImg1 from '../../img/bckfarms/farm1-home.jpeg';
import farmImg2 from '../../img/bckfarms/farm2-home.jpeg';
import './Farms.css';

// ============ HeroSlider Component ============
const HeroSlider: React.FC<{ t: (ar: string, en: string) => string }> = ({ t }) => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="farm-hero-slider">
      {SLIDES.map((src, i) => (
        <div
          key={i}
          className={`farm-hero-slide ${i === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <div className="farm-hero-overlay" />

      <div className={`farm-hero-content ${loaded ? 'farm-hero-content--visible' : ''}`}>
        <h1 className="farm-hero-title">{t('مزارع شهيلا', 'Shehaila   Farms')}</h1>
        <p className="farm-hero-subtitle">
          {t(
            'الأرض الخصبة التي تُغذّي الأجيال — نُعيد تعريف الزراعة المتقدمة من خلال أنظمة إنتاج راقية تجمع بين الجودة والاستدامة.',
            'Where the earth meets excellence — redefining modern agriculture through advanced production systems that unite quality, sustainability, and innovation.'
          )}
        </p>
        <div className="farm-hero-cta">
          <button className="farm-hero-btn farm-hero-btn--primary">{t('اكتشف مزارعنا', 'Explore Our Farms')}</button>
          <button className="farm-hero-btn farm-hero-btn--ghost">{t('تواصل معنا', 'Contact Us')}</button>
        </div>
      </div>

      <div className="farm-hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`farm-hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// ============ ContentSection Component ============
interface ContentSectionProps {
  tag: string;
  title: string;
  paragraph: string;
  images: [string, string];
  reversed?: boolean;
  accent?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  tag,
  title,
  paragraph,
  images,
  reversed = false,
  accent = '#3399cc',
}) => {
  const { ref: textRef, isVisible: textVisible } = useReveal();
  const { ref: imgRef, isVisible: imgVisible } = useReveal();

  return (
    <section className={`farm-content-section ${reversed ? 'farm-content-section--reversed' : ''}`}>
      <div className="farm-content-section__inner">
        <div
          ref={imgRef}
          className={`farm-content-section__images farm-reveal-left ${imgVisible ? 'visible' : ''}`}
        >
          <div className="farm-cs-img farm-cs-img--primary">
            <img src={images[0]} alt={title} />
          </div>
          <div className="farm-cs-img farm-cs-img--secondary">
            <img src={images[1]} alt={title} />
          </div>
          <div className="farm-cs-img-decoration" style={{ background: accent }} />
        </div>

        <div
          ref={textRef}
          className={`farm-content-section__text farm-reveal-right ${textVisible ? 'visible' : ''}`}
        >
          <span className="farm-cs-tag" style={{ color: accent, borderColor: accent }}>
            {tag}
          </span>
          <h2 className="farm-cs-title">{title}</h2>
          <div className="farm-cs-divider" style={{ background: accent }} />
          <p className="farm-cs-paragraph">{paragraph}</p>
        </div>
      </div>
    </section>
  );
};

// ============ FarmCards Component ============
interface FarmCardData {
  nameAr: string;
  nameEn: string;
  locationAr: string;
  locationEn: string;
  descAr: string;
  descEn: string;
  capacityAr: string;
  capacityEn: string;
  statsAr: string;
  statsEn: string;
  image: string;
  accentColor: string;
}

const FARM_CARDS: FarmCardData[] = [
  {
    nameAr: 'مزرعة تبالة',
    nameEn: 'Tabalah Farm',
    locationAr: 'تبالة، منطقة جازان',
    locationEn: 'Tabalah, Jazan Region',
    descAr:
      'مزرعة تبالة هي إحدى ركائزنا الإنتاجية الرئيسية، مجهزة بأحدث تقنيات التربية الحديثة وأنظمة التحكم البيئي الدقيقة لضمان إنتاج بيض بجودة استثنائية طوال العام.',
    descEn:
      'Tabalah Farm stands as one of our flagship production hubs, equipped with cutting-edge poultry technology and precision climate control systems that ensure consistently exceptional egg quality year-round.',
    capacityAr: '25 مليون بيضة سنوياً',
    capacityEn: '25 Million Eggs Annually',
    statsAr: 'إنتاجية عالية',
    statsEn: 'High Yield',
    image: farmImg1,
    accentColor: '#005599',
  },
  {
    nameAr: 'مزرعة بيشة',
    nameEn: 'Bisha Farm',
    locationAr: 'بيشة، منطقة عسير',
    locationEn: 'Bisha, Asir Region',
    descAr:
      'مزرعة بيشة تجسّد التوسع الاستراتيجي لمزارع شهيلا في المنطقة الجنوبية، حيث تعمل وفق أعلى معايير الاستدامة وتقدم إنتاجًا زراعيًا متكاملًا يخدم المجتمع المحلي.',
    descEn:
      "Bisha Farm embodies Shaila's strategic expansion into the southern region, operating to the highest sustainability standards while delivering integrated agricultural output that serves local communities.",
    capacityAr: '20 مليون بيضة سنوياً',
    capacityEn: '20 Million Eggs Annually',
    statsAr: 'مستدامة وصديقة للبيئة',
    statsEn: 'Sustainable & Eco-Friendly',
    image: farmImg2,
    accentColor: '#005599',
  },
];

const FarmCard: React.FC<{ data: FarmCardData; delay?: number; t: (ar: string, en: string) => string }> = ({ data, delay = 0, t }) => {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`farm-card farm-reveal-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="farm-card__image-wrap">
        <img src={data.image} alt={t(data.nameAr, data.nameEn)} className="farm-card__image" />
        <div className="farm-card__image-overlay" style={{ background: `linear-gradient(to top, ${data.accentColor}dd 0%, transparent 60%)` }} />
        <div className="farm-card__badge">
          <Egg size={14} />
          <span>{t(data.capacityAr, data.capacityEn)}</span>
        </div>
      </div>

      <div className="farm-card__body">
        <div className="farm-card__location">
          <MapPin size={15} />
          <span>{t(data.locationAr, data.locationEn)}</span>
        </div>

        <h3 className="farm-card__name" style={{ color: data.accentColor }}>
          {t(data.nameAr, data.nameEn)}
        </h3>

        <p className="farm-card__desc">{t(data.descAr, data.descEn)}</p>

        <div className="farm-card__stats">
          <div className="farm-card__stat">
            <TrendingUp size={16} color={data.accentColor} />
            <span>{t(data.statsAr, data.statsEn)}</span>
          </div>
        </div>

        <button className="farm-card__cta" style={{ borderColor: data.accentColor, color: data.accentColor }}>
          {t('تفاصيل المزرعة', 'Farm Details')}
          <ArrowRight size={15} className="farm-card__arrow" />
        </button>
      </div>
    </div>
  );
};

const FarmCards: React.FC<{ t: (ar: string, en: string) => string }> = ({ t }) => {
  const { ref: headRef, isVisible: headVisible } = useReveal();

  return (
    <section className="farm-cards-section">
      <div
        ref={headRef}
        className={`farm-cards__header farm-reveal-up ${headVisible ? 'visible' : ''}`}
      >
        <h2 className="farm-cards__title">{t('مزارعنا', 'Our Farms')}</h2>
        <p className="farm-cards__subtitle">
          {t(
            'مزرعتان رئيسيتان تمثلان قمة التطور الزراعي في المملكة العربية السعودية',
            'Two flagship farms that represent the pinnacle of agricultural advancement in Saudi Arabia'
          )}
        </p>
      </div>

      <div className="farm-cards__grid">
        {FARM_CARDS.map((card, i) => (
          <FarmCard key={i} data={card} delay={i * 150} t={t} />
        ))}
      </div>
    </section>
  );
};

// ============ Main Farm Component ============
export default function Farm() {
  const { t, lang, setLang } = useLanguage();
  const PRODUCTION_IMAGES = [prod1, prod2];

  const SORTING_IMAGES = [sort1, sort2];

  const PACKAGING_IMAGES = [pack1, pack2];
  return (
    <div
      className="farm-page"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Hero Section */}
      <HeroSlider t={t} />

      {/* Production Section */}
      <ContentSection
        tag={t('الإنتاج', 'Production')}
        title={t('إنتاج بيض عالي الجودة', 'Premium Quality Egg Production')}
        paragraph={t(
          'في مزارع شهيلا نُحوّل الشغف بالزراعة إلى منظومة إنتاجية متكاملة. تعتمد مزارعنا على تقنيات التربية المتقدمة وأنظمة التغذية الذكية، مما يضمن إنتاج بيض يتميز بجودته الغذائية العالية واتساق طازجيته. نلتزم بمعايير الاستدامة في كل مرحلة، من رعاية الطيور إلى التحكم في البيئة، لضمان إنتاج يتجاوز توقعات السوق.',
          'At Shehaila   Farms, passion for agriculture transforms into a complete production ecosystem. Our facilities leverage advanced breeding technologies and intelligent feeding systems, ensuring eggs of exceptional nutritional quality and consistent freshness. We uphold rigorous sustainability standards at every stage — from bird welfare to environmental control — delivering output that consistently surpasses market expectations.'
        )}
        images={PRODUCTION_IMAGES}
        accent="#3399cc"
      />

      {/* Sorting & Inspection Section */}
      <ContentSection
        tag={t('الفرز والفحص', 'Sorting & Inspection')}
        title={t('جودة لا تقبل المساومة', 'Uncompromising Quality Standards')}
        paragraph={t(
          'تخضع كل بيضة تغادر مزارعنا لسلسلة صارمة من الفحوصات والاختبارات. تعتمد أنظمة الفرز لدينا على رؤية حاسوبية متطورة تكشف أدق التفاصيل وتضمن اتساق الحجم والوزن. يُشرف فريق من الخبراء على كل مرحلة للتأكد من أن كل منتج يحمل بصمة شهيلا يرقى إلى أعلى معايير السلامة الغذائية.',
          'Every egg leaving our farms undergoes a rigorous sequence of inspections and assessments. Our sorting systems employ advanced computer vision to detect the finest details, ensuring consistent size and weight grading. A team of specialists oversees each stage, guaranteeing that every Shaila-branded product meets the highest standards of food safety and quality assurance.'
        )}
        images={SORTING_IMAGES}
        reversed
        accent="#005599"
      />

      {/* Packaging & Distribution Section */}
      <ContentSection
        tag={t('التعبئة والتوزيع', 'Packaging & Distribution')}
        title={t('من المزرعة إلى مائدتك', 'From Our Farms to Your Table')}
        paragraph={t(
          'نُولي التغليف والتوزيع اهتمامًا بالغًا لضمان وصول منتجاتنا بأفضل حال ممكن. تُستخدم مواد تغليف مبتكرة تحافظ على الجودة وتحترم البيئة، فيما تضمن شبكة لوجستية متكاملة توصيل المنتجات في وقت قياسي ودرجات حرارة مثالية لكل نقطة في المملكة.',
          'We dedicate exceptional attention to packaging and distribution to ensure our products arrive in peak condition. Innovative eco-conscious packaging materials preserve freshness throughout transit, while our integrated logistics network guarantees delivery across the Kingdom at optimal temperatures and record timelines — because excellence doesn\'t stop at the farm gate.'
        )}
        images={PACKAGING_IMAGES}
        accent="#3399cc"
      />

      {/* Farm Cards Section */}
      <FarmCards t={t} />

    </div>
  );
}
