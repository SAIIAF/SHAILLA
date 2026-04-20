import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCounter } from '../../hooks/useCounter';
import logo from '../../img/لوجو مزارع شهيلا.jpg';
import { ArrowLeft, ArrowRight, Clock, MapPin, Phone, Mail, ExternalLink, ZoomIn, X } from 'lucide-react';
import heroBg from '../../img/back1.jpeg';
import cert1 from '../../img/تفاصيل سعودى جاب تنتهي 12-2026_page-0001.jpg';
import cert2 from '../../img/شهادة علامة التجارية قطاع الدواجن_page-0001.jpg';
import farm1 from '../../img/farm1-home.jpeg';
import farm2 from '../../img/farm2-home.jpeg';
import eggWhite from '../../img/whitegg.jpg';
import eggRed from '../../img/redegg.jpg';
import feedImg from '../../img/3laf.jpeg';
import fertilizerImg from '../../img/semad.jpg';
import { Link } from 'react-router-dom';
import './Home.css';

// ============== STATS SECTION ==============
interface StatItemProps {
    value: number;
    suffix: string;
    label_ar: string;
    label_en: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, suffix, label_ar, label_en }) => {
    const { t } = useLanguage();
    const { count, elementRef } = useCounter(value, 2200);

    return (
        <div className="stat-item" ref={elementRef}>
            <div className="stat-number">
                {count.toLocaleString('en-US')}{suffix}
            </div>
            <div className="stat-label">{t(label_ar, label_en)}</div>
        </div>
    );
};

// ============== HERO SECTION ==============
const HeroSection: React.FC = () => {
    const { t } = useLanguage();
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;
        el.classList.add('hero-content--visible');
    }, []);

    return (
        <section
            className="hero-section"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-particles">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`hero-particle hero-particle--${i + 1}`}></div>
                ))}
            </div>

            <div className="hero-content" ref={contentRef}>
                <div className="hero-logo-wrapper">
                    <img src={logo} alt={t('مزارع شهيلا', 'Shehaila Farms')} className="hero-logo" />
                </div>

                <h1 className="hero-title">
                    {t('مزارع شهيلا', 'Shehaila Farms')}
                </h1>

                <p className="hero-subtitle">
                    {t(
                        'رائدون في إنتاج البيض بأعلى معايير الجودة — من مزارعنا إلى مائدتكم بكل أمان وثقة',
                        'Leading egg production with the highest quality standards — from our farms to your table with safety and trust'
                    )}
                </p>

                <div className="hero-cta-group">
                    <a href="#about" className="hero-cta hero-cta--primary">
                        {t('تعرف علينا', 'About Us')}
                    </a>
                    <a href="#products" className="hero-cta hero-cta--secondary">
                        {t('منتجاتنا', 'Our Products')}
                    </a>
                </div>
            </div>
        </section>
    );
};

// ============== ABOUT SECTION ==============
const AboutSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-logo-side fade-in-left">
                    <div className="about-logo-frame">
                        <img src={logo} alt={t('مزارع شهيلا', 'Shehaila Farms')} className="about-logo" />
                        <div className="about-logo-badge">
                            <span>{t('25+', '25+')}</span>
                            <small>{t('عاماً من الخبرة', 'Years of Excellence')}</small>
                        </div>
                    </div>
                </div>
                <div className="about-text-side fade-in-right">
                    <span className="about-label">{t('من نحن', 'About Us')}</span>
                    <h2 className="about-title">
                        {t('شركة سعودية رائدة في إنتاج البيض والدواجن', 'A Leading Saudi Company in Egg & Poultry Production')}
                    </h2>
                    <p className="about-body">
                        {t(
                            'مزارع شهيلا شركة سعودية متخصصة في إنتاج البيض الطازج عالي الجودة، تأسست على أسس راسخة من الجودة والالتزام. نعمل وفق أحدث المعايير الزراعية الدولية لضمان أفضل منتج يصل إلى المستهلك السعودي.',
                            'Shehaila Farms is a Saudi company specialized in producing high-quality fresh eggs, built on firm foundations of quality and commitment. We operate according to the latest international agricultural standards to ensure the best product reaches the Saudi consumer.'
                        )}
                    </p>
                    <p className="about-body">
                        {t(
                            'تمتد مزارعنا في منطقتي بيشة وتبالة، مجهزة بأحدث التقنيات وتضم كوادر بشرية متخصصة تحرص على صحة وسلامة القطعان والمنتجات. نفخر بثقة آلاف الأسر السعودية التي تختار منتجاتنا يومياً.',
                            'Our farms span the regions of Bisha and Tabalah, equipped with the latest technologies and staffed by specialized teams ensuring the health and safety of our flocks and products. We are proud of the trust of thousands of Saudi families who choose our products daily.'
                        )}
                    </p>
                    <div className="about-features">
                        <div className="about-feature">
                            <div className="about-feature-dot"></div>
                            <span>{t('جودة معتمدة دولياً', 'Internationally Certified Quality')}</span>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-dot"></div>
                            <span>{t('مزارع حديثة ومتطورة', 'Modern & Advanced Farms')}</span>
                        </div>
                        <div className="about-feature">
                            <div className="about-feature-dot"></div>
                            <span>{t('شبكة توزيع واسعة', 'Extensive Distribution Network')}</span>
                        </div>
                    </div>
                    <Link to="/about" className="about-cta">
                        {t('اقرأ المزيد عنا', 'Read More About Us')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

// ============== PRODUCTS SECTION ==============
const products = [
    {
        id: 1,
        title_ar: 'البيض الأبيض الطازج',
        title_en: 'Fresh White Eggs',
        desc_ar: 'بيض أبيض طازج عالي الجودة من مزارعنا الحديثة، يُجمع يومياً ويخضع لأشد معايير السلامة الغذائية',
        desc_en: 'Fresh high-quality white eggs from our modern farms, collected daily and subject to the strictest food safety standards',
        image: eggWhite,
        active: true,
        badge_ar: 'منتج رئيسي',
        badge_en: 'Main Product',
    },
    {
        id: 2,
        title_ar: 'البيض البني',
        title_en: 'Brown Eggs',
        desc_ar: 'بيض بني طازج من دجاج مربى بطريقة طبيعية — قريباً في أسواقنا',
        desc_en: 'Fresh brown eggs from naturally raised chickens — coming soon to our markets',
        image: eggRed,
        active: false,
        badge_ar: 'قريباً',
        badge_en: 'Coming Soon',
    },
    {
        id: 3,
        title_ar: 'الأعلاف الزراعية',
        title_en: 'Animal Feed',
        desc_ar: 'أعلاف عالية الجودة مُصنّعة وفق أحدث المعايير الغذائية للطيور والمواشي — قريباً',
        desc_en: 'High-quality feed manufactured according to the latest nutritional standards for poultry and livestock — coming soon',
        image: feedImg,
        active: false,
        badge_ar: 'قريباً',
        badge_en: 'Coming Soon',
    },
    {
        id: 4,
        title_ar: 'الأسمدة العضوية',
        title_en: 'Organic Fertilizers',
        desc_ar: 'أسمدة عضوية طبيعية مستخلصة من مزارعنا، صديقة للبيئة وفعّالة لتحسين خصوبة التربة — قريباً',
        desc_en: 'Natural organic fertilizers derived from our farms, eco-friendly and effective for improving soil fertility — coming soon',
        image: fertilizerImg,
        active: false,
        badge_ar: 'قريباً',
        badge_en: 'Coming Soon',
    },
];

const ProductsSection: React.FC = () => {
    const { t, isRTL } = useLanguage();
    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

    return (
        <section className="products-section" id="products">
            <div className="section-container">
                <span className="section-label">{t('ما نقدمه', 'What We Offer')}</span>
                <h2 className="section-title">{t('منتجاتنا', 'Our Products')}</h2>
                <div className="products-grid">
                    {products.map((p) => (
                        <div key={p.id} className={`product-card${!p.active ? ' product-card--soon' : ''}`}>
                            <div className="product-image-wrap">
                                <img src={p.image} alt={t(p.title_ar, p.title_en)} />
                                <div className={`product-badge${p.active ? ' product-badge--active' : ' product-badge--soon'}`}>
                                    {!p.active && <Clock size={14} />}
                                    <span>{t(p.badge_ar, p.badge_en)}</span>
                                </div>
                                {!p.active && <div className="product-soon-overlay"></div>}
                            </div>
                            <div className="product-body">
                                <h3>{t(p.title_ar, p.title_en)}</h3>
                                <p>{t(p.desc_ar, p.desc_en)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-cta">
                    <Link to="/products" className="cta-button">
                        {t('عرض جميع المنتجات', 'View All Products')}
                        <ArrowIcon size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

// ============== FARMS SECTION ==============
const farms = [
    {
        id: 1,
        name_ar: 'مزرعة بيشة',
        name_en: 'Bisha Farm',
        location_ar: 'منطقة عسير — بيشة',
        location_en: 'Asir Region — Bisha',
        capacity_ar: '25 مليون بيضة سنوياً',
        capacity_en: '25 Million Eggs Annually',
        desc_ar: 'مزرعة بيشة تتميز بموقعها الاستراتيجي وبيئتها المثالية لتربية الدواجن، وتعتمد على أحدث تقنيات الرعاية والتغذية لضمان إنتاج بيض طازج عالي الجودة على مدار العام.',
        desc_en: 'Bisha farm stands out for its strategic location and ideal environment for poultry raising, relying on the latest care and nutrition technologies to ensure fresh, high-quality egg production throughout the year.',
        image: farm2,
    },
    {
        id: 2,
        name_ar: 'مزرعة تبالة',
        name_en: 'Tabalah Farm',
        location_ar: 'منطقة عسير — تبالة',
        location_en: 'Asir Region — Tabalah',
        capacity_ar: '25 مليون بيضة سنوياً',
        capacity_en: '25 Million Eggs Annually',
        desc_ar: 'مزرعتنا الرئيسية في تبالة تُعدّ من أحدث مزارع إنتاج البيض في المنطقة، مجهزة بأنظمة تحكم مناخي ورعاية تلقائية تضمن أعلى مستويات الإنتاج والجودة.',
        desc_en: 'Our main farm in Tabalah is one of the most modern egg production farms in the region, equipped with climate control systems and automated care ensuring the highest levels of production and quality.',
        image: farm1,
    },
];

const FarmsSection: React.FC = () => {
    const { t, isRTL } = useLanguage();
    const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

    return (
        <section className="farms-section" id="farms">
            <div className="section-container">
                <span className="section-label">{t('حيث تبدأ الجودة', 'Where Quality Begins')}</span>
                <h2 className="section-title">{t('مزارعنا', 'Our Farms')}</h2>
                <div className="farms-grid">
                    {farms.map((farm) => (
                        <div key={farm.id} className="farm-card">
                            <div className="farm-image-wrap">
                                <img src={farm.image} alt={t(farm.name_ar, farm.name_en)} />
                                <div className="farm-image-overlay"></div>
                                <div className="farm-image-header">
                                    <div className="farm-capacity">
                                        <span>{t(farm.capacity_ar, farm.capacity_en)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="farm-body">
                                <div className="farm-location">
                                    <MapPin size={16} />
                                    <span>{t(farm.location_ar, farm.location_en)}</span>
                                </div>
                                <h3>{t(farm.name_ar, farm.name_en)}</h3>
                                <p>{t(farm.desc_ar, farm.desc_en)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-cta">
                    <Link to="/farms" className="cta-button">
                        {t('اكتشف مزارعنا', 'Discover Our Farms')}
                        <ArrowIcon size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

// ============== STATS SECTION ==============
const StatsSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="stats-section">
            <div className="stats-overlay"></div>
            <div className="section-container stats-inner">
                <div className="stats-header">
                    <h2 className="stats-title">{t('أرقامنا تتحدث عنا', 'Our Numbers Speak for Themselves')}</h2>
                    <p className="stats-subtitle">
                        {t(
                            'عقود من الخبرة والعمل الدؤوب تترجمها أرقام حقيقية تعكس حجم ثقة عملائنا الكرام',
                            'Decades of experience and hard work translated into real numbers reflecting the trust of our valued customers'
                        )}
                    </p>
                </div>
                <div className="stats-grid">
                    <StatItem value={50} suffix="M+" label_ar="بيضة سنوياً" label_en="Eggs Annually" />
                    <StatItem value={15} suffix="+" label_ar="مزرعة حديثة" label_en="Modern Farms" />
                    <StatItem value={25} suffix="+" label_ar="عاماً من الخبرة" label_en="Years Experience" />
                    <StatItem value={500} suffix="+" label_ar="موظف متخصص" label_en="Specialized Staff" />
                </div>
            </div>
        </section>
    );
};

// ============== LOCATIONS SECTION ==============
const locations = [
    {
        id: 1,
        
        city_ar: 'بيشة',
        city_en: 'Bisha',
        region_ar: 'منطقة عسير',
        region_en: 'Asir Region',
        phone: '0544131444',
        email: 'social@afaqsaleh.com',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=بيشة+عسير+المملكة+العربية+السعودية',
    },
    {
        id: 2,
        city_ar: 'تبالة',
        city_en: 'Tabalah',
        region_ar: 'منطقة عسير',
        region_en: 'Asir Region',
        phone: '0544131444',
        email: 'social@afaqsaleh.com',
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=تبالة+جازان+المملكة+العربية+السعودية',
    },
];

const LocationsSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="locations-section" id="locations">
            <div className="section-container">
                <span className="section-label">{t('تواصل معنا', 'Get In Touch')}</span>
                <h2 className="section-title">{t('مواقعنا', 'Our Locations')}</h2>
                <p className="locations-intro">
                    {t(
                        'نحن هنا لخدمتكم — تفضلوا بزيارة أقرب موقع لنا أو تواصلوا معنا مباشرة',
                        'We are here to serve you — visit the nearest location or contact us directly'
                    )}
                </p>
                <div className="locations-grid">
                    {locations.map((loc) => (
                        <div key={loc.id} className="location-card">
                            <div className="location-card-header">
                                <div className="location-icon-wrap">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h3>{t(loc.city_ar, loc.city_en)}</h3>
                                    <span className="location-region">{t(loc.region_ar, loc.region_en)}</span>
                                </div>
                            </div>
                            <div className="location-card-body">
                                <div className="location-info-row">
                                    <Phone size={18} />
                                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`}>{loc.phone}</a>
                                </div>
                                <div className="location-info-row">
                                    <Mail size={18} />
                                    <a href={`mailto:${loc.email}`}>{loc.email}</a>
                                </div>
                            </div>
                            <a
                                href={loc.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="location-maps-btn"
                            >
                                <MapPin size={16} />
                                {t('فتح في خرائط جوجل', 'Open in Google Maps')}
                                <ExternalLink size={14} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============== CERTIFICATIONS SECTION ==============
const certs = [
    {
        id: 1,
        title_ar: 'شهادة الجودة الغذائية',
        title_en: 'Food Quality Certificate',
        image: cert1,
    },
    {
        id: 2,
        title_ar: 'شهادة العلامة التجارية',
        title_en: 'Trade Mark Certificate',
        image: cert2,
    },
];


const CertificationsSection: React.FC = () => {
    const { t } = useLanguage();
    const [selected, setSelected] = React.useState<null | typeof certs[0]>(null);
    const [zoom, setZoom] = React.useState(false);

    return (
        <section className="certs-section" id="certifications">
            <div className="section-container">
                <span className="section-label">{t('موثوقية وجودة', 'Trust & Quality')}</span>
                <h2 className="section-title">
                    {t('اعتماداتنا وشهاداتنا', 'Our Certifications & Accreditations')}
                </h2>
                <p className="certs-intro">
                    {t(
                        'نحرص على الحصول على أعلى الشهادات والاعتمادات الدولية والمحلية لضمان جودة منتجاتنا وسلامتها. ثقتكم هي أغلى ما نمتلك، ونعمل كل يوم لنكون في مستوى توقعاتكم.',
                        'We ensure obtaining the highest international and local certifications to guarantee the quality and safety of our products. Your trust is our most valuable asset, and we work every day to meet your expectations.'
                    )}
                </p>
                <div className="certs-grid">
                    {certs.map((cert) => (
                        <div
                            key={cert.id}
                            className="cert-card"
                            onClick={() => { setSelected(cert); setZoom(false); }}
                        >
                            <div className="cert-image-wrap">
                                <img src={cert.image} alt={t(cert.title_ar, cert.title_en)} />
                                <div className="cert-hover-overlay">
                                    <ZoomIn size={32} color="#fff" />
                                    <span>{t('عرض الشهادة', 'View Certificate')}</span>
                                </div>
                            </div>
                            <div className="cert-label">{t(cert.title_ar, cert.title_en)}</div>
                        </div>
                    ))}
                </div>
            </div>

            {selected && (
                <div className="lightbox-backdrop" onClick={() => setSelected(null)}>
                    <div
                        className={`lightbox-content${zoom ? ' lightbox-content--zoomed' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="lightbox-close" onClick={() => setSelected(null)}>
                            <X size={24} />
                        </button>
                        <button
                            className="lightbox-zoom"
                            onClick={() => setZoom(!zoom)}
                            title={t('تكبير / تصغير', 'Zoom in / out')}
                        >
                            <ZoomIn size={20} />
                        </button>
                        <img
                            src={selected.image}
                            alt={t(selected.title_ar, selected.title_en)}
                            className="lightbox-image"
                        />
                        <div className="lightbox-title">{t(selected.title_ar, selected.title_en)}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

// ============== MAIN HOME PAGE ==============
const Home: React.FC = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <AboutSection />
            <CertificationsSection />
            <StatsSection />
            <ProductsSection />
            <FarmsSection />
            <LocationsSection />
        </div>
    );
};

export default Home;
