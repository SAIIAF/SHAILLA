import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
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
import { useCounter } from '../../hooks/useCounter';

import { Link } from 'react-router-dom';
import './Home.css';

// ============== STATS SECTION ==============
interface StatItemProps {
    value: string | number;
    suffix: string;
    label_ar: string;
    label_en: string;
    icon: React.ReactNode;
}
const StatItem: React.FC<StatItemProps> = ({
    value,
    suffix,
    label_ar,
    label_en,
    icon,
}) => {
    const { t } = useLanguage();
    return (
        <div className="stat-item">
            <div className="stat-icon">{icon}</div>

            <div className="stat-number">
                {typeof value === 'number' ? value.toLocaleString('en-US') : value}{suffix}
            </div>
            <div className="stat-labell">
                {t(label_ar, label_en)}
            </div>
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
                            'مزارع شهيلا احدي فروع شركة آفاق صالح المحدودة في إنتاج بيض المائدة عالي الجودة، تأسست على أسس راسخة من الجودة والالتزام. نعمل وفق أحدث المعايير الزراعية الدولية لضمان أفضل منتج يصل إلى المستهلك .',
                            'Shahila Farms, one of the branches of Afaq Saleh Limited, specializes in the production of high-quality table eggs. It was founded on solid foundations of quality and commitment. We operate according to the latest international agricultural standards to ensure the best product reaches the consumer.')}
                    </p>
                    <p className="about-body">
                        {t(
                            '  تقدم مزارع شهيلا إنتاجها من خلال مشروعي (بيشة - تباله) المجهزة بأحدث التقنيات وتضم كوادر بشرية متخصصة تحرص على صحة وسلامة القطعان والمنتجات. نفخر بثقة آلاف الأسر التي تختار منتجاتنا يومياً.',
                            'Shuhaila Farms offers its produce through the (Bisha - Tabala) projects, which are equipped with the latest technologies and include specialized human resources that ensure the health and safety of the herds and products. We are proud of the trust of thousands of families who choose our products daily.'                        )}
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
        capacity_ar: '150 مليون بيضة سنوياً',
        capacity_en: '150 Million Eggs Annually',
        desc_ar: 'مزرعة بيشة تتميز بموقعها الاستراتيجي وبيئتها المثالية لتربية الدواجن، وتعتمد على أحدث تقنيات الرعاية والتغذية و جمع و فرز و تعبئة البيض لضمان إنتاج بيض طازج عالي الجودة على مدار العام.',
        desc_en: 'Bisha Farm is distinguished by its strategic location and ideal environment for raising poultry, and it relies on the latest technologies for care, feeding, collecting, sorting and packing eggs to ensure the production of fresh, high-quality eggs throughout the year.',
        image: farm2,
    },
    {
        id: 2,
        name_ar: 'مزرعة تبالة',
        name_en: 'Tabalah Farm',
        location_ar: 'منطقة عسير — تبالة',
        location_en: 'Asir Region — Tabalah',
        capacity_ar: '80 مليون بيضة سنوياً',
        capacity_en: '80 Million Eggs Annually',
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

// ============== SVG ICONS ==============
const SaudiMapSVG: React.FC = () => (
    <svg fill="#ffffff00" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="242px" height="242px" viewBox="0 0 260 218" enable-background="new 0 0 260 218" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#fcfcfc" stroke-width="2.08"> <polygon points="250.62,128.396 218.465,126.096 186.381,89.436 183.314,74.268 175.622,69.836 164.337,52.104 140.28,45.323 119.649,43.718 69.834,5.548 55.937,2.385 29.891,9.31 40.937,23.591 16.401,39.788 2,42.808 5.547,54.501 28.885,104.196 43.884,120.202 48.892,132.278 48.221,149.003 66.048,167.788 96,215.615 101.798,202.101 154.872,207.276 164.169,192.852 176.533,186.334 213.193,179.961 251.291,164.41 258,136.711 "></polygon> </g><g id="SVGRepo_iconCarrier"> <polygon points="250.62,128.396 218.465,126.096 186.381,89.436 183.314,74.268 175.622,69.836 164.337,52.104 140.28,45.323 119.649,43.718 69.834,5.548 55.937,2.385 29.891,9.31 40.937,23.591 16.401,39.788 2,42.808 5.547,54.501 28.885,104.196 43.884,120.202 48.892,132.278 48.221,149.003 66.048,167.788 96,215.615 101.798,202.101 154.872,207.276 164.169,192.852 176.533,186.334 213.193,179.961 251.291,164.41 258,136.711 "></polygon> </g></svg>
);

const EggsSVG: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="340" height="340" viewBox="-2 -3.5 24 24"><path fill="currentColor" d="M6 17a6 6 0 0 1-6-6c0-3.314 3-9 6-9s6 5.686 6 9a6 6 0 0 1-6 6m6.612-2.161A5.98 5.98 0 0 0 14 11c0-2.518-1.732-6.405-3.88-8.127C11.213 1.227 12.607 0 14 0c3 0 6 5.686 6 9a6 6 0 0 1-7.388 5.839" /></svg>
);

const WheatSVG: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 512 512"><path fill="currentColor" d="M98.344 16.688C79.692 43.785 68.498 69.01 65.5 89.56l23.938 39.157l28.624-33.47c.868-21.213-5.49-48.677-19.718-78.563zM472.5 19.625C444.04 36.055 423.112 54 411.562 71.25l4.75 45.688L456.563 99c9.89-18.777 15.938-46.29 15.938-79.375zm-91.75 27.28c-10.153 21.036-16.8 40.84-20.156 58.314l18.375 57.686l19.78-34.25l-6.5-62.22h.03a277 277 0 0 0-11.53-19.53zM27.25 80.782c-.125 23.364 2.393 44.102 6.875 61.314L75.5 186.25l3.125-39.406L46 93.47l.03-.032a280 280 0 0 0-18.78-12.657zm132.844 10.532c-8.415 3.504-16.29 7.213-23.594 11.094l-39.25 45.97l-3.094 39.374l50.438-39.094c6.712-15.904 12.09-35.263 15.5-57.344m177.22 21.626c-24.024 58.09-16.16 97.86 7.873 108.5l21.157-36.625l-19.594-61.438a274 274 0 0 0-9.438-10.438zm146.03.218c-4.55-.028-8.97.084-13.28.28L414.935 138l-19.78 34.28l62.343-13.655c12.897-11.47 26.09-26.626 38.656-45.094c-4.358-.216-8.64-.348-12.812-.374zm-226.094 8.72c-23.24 23.238-38.832 46.003-45.53 65.655l16.436 42.907l34.22-27.75c4.695-20.704 3.436-48.856-5.126-80.812M16.406 159.06c3.28 62.77 27.482 95.31 53.75 94.594l3.344-42.22l-44.063-47a279 279 0 0 0-13.03-5.374zm143.22 11.375a272 272 0 0 0-18.5 4.563l-48.97 37.938l-3.312 41.75c26.492 7.51 57.16-20.567 70.78-84.25zm16.06 1.563c-4.36 22.935-5.65 43.762-4.374 61.5l32.688 51l10.22-38.188l-22.407-58.437h.03a277 277 0 0 0-16.155-15.875zm267.408 8.938l-60.563 13.218l-20.936 36.25c20.682 18.195 60.438 6.035 100.125-45.625a275 275 0 0 0-18.626-3.843m-138.688 25.53c-8.912 1.92-17.304 4.16-25.187 6.657l-46.97 38.03l-10.22 38.19l56.69-29.283c9.493-14.424 18.323-32.49 25.686-53.593zm155.125 25.063c-25.85 20.324-44.046 41.06-53.03 59.782l11.22 44.532l37.28-23.47c7.126-19.99 9.236-48.088 4.53-80.843zm-123.342 8.595c-34.435 77.573-59.394 159.06-62.97 253.03h18.72c3.558-90.792 27.573-169.428 61.312-245.436l-17.063-7.595zm-185.375 6.906c-8.173 62.347 9.714 98.713 35.687 102.75l10.97-40.874l-34.814-54.25a279 279 0 0 0-11.844-7.625zm221.75 24.532c-7.053 22.243-10.817 42.77-11.657 60.532l26.406 54.594L402 349.967l-15.28-60.687h.06c-4.3-5.848-9.033-11.76-14.217-17.717zm-302.47 1.532c-8.664 74.584-8.13 147.835 12.188 220.062h19.44c-20.877-70.772-21.764-143.02-13.064-217.906l-18.562-2.156zm219.47 11.094c-6.613.16-12.953.54-19.032 1.125L215.5 313.78l-10.844 40.408c24.69 12.23 59.938-9.82 84.906-70zm206.718 36.937c-9.072.844-17.664 2.052-25.78 3.594l-51.156 32.217l-14.688 36.657l59.75-22.313c11.14-13.193 22.055-30.075 31.875-50.155zm-157.31 22c-15.528 60.938-2.096 99.19 23.217 106.28l15.72-39.28l-28.094-58.03c-3.43-3-7.053-5.985-10.844-8.97zM183.25 368.72c-12.674 41.233-22.26 82.547-26.844 124.436h18.813c4.507-39.722 13.69-79.23 25.905-118.97l-17.875-5.467zm270 26.655l-58 21.688l-15.563 38.875c23.056 15.098 60.673-2.606 92.625-59.407a273 273 0 0 0-19.062-1.155zM356.5 469.03c-1.874 7.713-3.185 15.757-3.656 24.126h18.687c.45-6.686 1.55-13.206 3.126-19.687l-18.156-4.44z" /></svg>
);

const OmegaSVG: React.FC = () => (
    <div className="stat-omega-symbol">
        <span className="omega-greek">Ω</span>
        <span className="omega-three">3</span>
    </div>
);

// ============== PERCENTAGE COUNTER COMPONENT ==============
interface PercentageCounterProps {
    cardClassName: string;
    visualElement: React.ReactNode;
    label_ar: string;
    label_en: string;
}

const PercentageCounter: React.FC<PercentageCounterProps> = ({
    cardClassName,
    visualElement,
    label_ar,
    label_en,
}) => {
    const { t } = useLanguage();
    const { count, elementRef } = useCounter(100, 2000);

    return (
        <div className={cardClassName} ref={elementRef}>
            <div className="stat-visual">{visualElement}</div>
            <div className="stat-content">
                <div className="stat-number">
                    <span className="stat-count">{count}</span>
                    <span className="stat-unit">%</span>
                </div>
                <div className="stat-labell">{t(label_ar, label_en)}</div>
            </div>
        </div>
    );
};

// ============== EGGS COUNTER COMPONENT ==============
const EggsCounter: React.FC = () => {
    const { t } = useLanguage();
    const { count, elementRef } = useCounter(230, 2000);

    return (
        <div className="stat-card stat-card--eggs" ref={elementRef}>
            <div className="stat-visual">
                <EggsSVG />
            </div>
            <div className="stat-content">
                <div className="stat-number">
                    <span className="stat-count">{count}</span>
                    <span className="stat-unit">{t('مليون', 'milion')}</span>
                </div>
                <div className="stat-labell">{t('بيضة سنوياً', 'Eggs Per Year')}</div>
            </div>
        </div>
    );
};

// ============== STATS SECTION ==============
const StatsSection: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="stats-section" id="why-shehaila">
            <div className="stats-overlay"></div>
            <div className="section-container stats-inner">
                <div className="stats-header">
                    <h2 className="stats-title">{t('لماذا شهيلا', 'Why Shehaila')}</h2>
                    <p className="stats-subtitle">
                        {t(
                            'لأننا نهتم بكل تفصيلة تبدأ من العلف النباتي النقي وحتى وصول بيضة صحية غنية بالعناصر الغذائية إلى مائدتكم.',
                            'Because we care about every detail, from pure plant-based nutrition to delivering healthy nutrient-rich eggs to your table.'
                        )}
                    </p>
                </div>

                <div className="stats-grid-new">

                    {/* Item 1 — Saudi Product (Animated Counter) */}
                    <PercentageCounter
                        cardClassName="stat-card stat-card--saudi"
                        visualElement={<SaudiMapSVG />}
                        label_ar="منتج سعودي"
                        label_en="Saudi Product"
                    />

                    <div className="stats-divider"></div>

                    {/* Item 2 — Plant-Based Feed (Animated Counter) */}
                    <div className="stat-card stat-card--plant">
                        <div className="stat-content stat-content--top">
                            <PercentageCounter
                                cardClassName=""
                                visualElement={null}
                                label_ar="تغذية نباتية"
                                label_en="Plant-Based Feed"
                            />
                        </div>
                        <div className="stat-visual">
                            <WheatSVG />
                        </div>
                    </div>

                    <div className="stats-divider"></div>

                    {/* Item 3 — Eggs Per Year (animated counter) */}
                    <EggsCounter />

                    <div className="stats-divider"></div>

                    {/* Item 4 — Omega-3 */}
                    <div className="stat-card stat-card--omega">
                        <div className="stat-content">
                            <div className="stat-labell stat-labell--omega">{t('غني بالأوميجا 3', 'Rich in Omega-3')}</div>
                            <div className="stat-omega-desc">
                                {t('أحماض دهنية أساسية لصحة القلب والدماغ', 'Essential fatty acids for heart and brain health')}
                            </div>


                            <div className="stat-visual stat-visual--omega">
                                <OmegaSVG />
                            </div>
                        </div>
                    </div>

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
