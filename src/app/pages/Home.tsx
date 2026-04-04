import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { MdVerified, MdEco, MdLocalShipping, MdThumbUp, MdLocationOn, } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
    const { t } = useLanguage();

    const products = [
        {
            title: t('بيض أبيض طازج', 'Fresh White Eggs'),
            description: t('بيض طازج عالي الجودة من مزارعنا', 'High-quality fresh eggs from our farms'),
            image: 'https://images.unsplash.com/photo-1773587534652-1c823227b555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGVnZ3MlMjBwb3VsdHJ5JTIwZmFybXxlbnwxfHx8fDE3NzUyNjYxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            title: t('بيض عضوي', 'Organic Eggs'),
            description: t('بيض عضوي من دجاج مربى بطريقة طبيعية', 'Organic eggs from naturally raised chickens'),
            image: 'https://images.unsplash.com/photo-1772472023164-61a6f0da9200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZWdnJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzUyNjYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            title: t('منتجات الدواجن', 'Poultry Products'),
            description: t('منتجات دواجن طازجة وعالية الجودة', 'Fresh and high-quality poultry products'),
            image: 'https://images.unsplash.com/photo-1538451825199-8605af521e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGlja2VuJTIwZmFybSUyMGFncmljdXx0dXJlfGVufDF8fHx8MTc3NTI2NjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            title: t('بيض مغذى', 'Enriched Eggs'),
            description: t('بيض غني بالأوميغا-3 والفيتامينات', 'Eggs enriched with Omega-3 and vitamins'),
            image: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVnZ3MlMjBiYXNrZXQlMjBuYXR1cmFsfGVufDF8fHx8MTc3NTI2NjE1NXww&ixlib=rb-4.1.0&q=80&w=1080'
        }
    ];

    const farms = [
        {
            name: t('مزرعة الشمال', 'Northern Farm'),
            location: t('المنطقة الشمالية', 'Northern Region'),
            image: 'https://images.unsplash.com/photo-1660444770624-7c11f739735d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbGFuZHNjYXBlJTIwZ3JlZW4lMjBmaWVsZHxlbnwxfHx8fDE3NzUxODY1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            name: t('مزرعة الوسط', 'Central Farm'),
            location: t('المنطقة الوسطى', 'Central Region'),
            image: 'https://images.unsplash.com/photo-1651947368468-ac261dcce643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzUyNjYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
            name: t('مزرعة الجنوب', 'Southern Farm'),
            location: t('المنطقة الجنوبية', 'Southern Region'),
            image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHN1c3RhaW5hYmlsaXR5JTIwcnVyYWx8ZW58MXx8fHwxNzc1MjY2MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080'
        }
    ];

    const locations = [
        {
            city: t('الرياض', 'Riyadh'),
            address: t('شارع الملك فهد، الرياض', 'King Fahd Road, Riyadh')
        },
        {
            city: t('جدة', 'Jeddah'),
            address: t('طريق الملك عبدالله، جدة', 'King Abdullah Road, Jeddah')
        },
        {
            city: t('الدمام', 'Dammam'),
            address: t('شارع الخليج، الدمام', 'Al Khaleej Street, Dammam')
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>
                        {t('شهيلا - رائدون في إنتاج البيض والدواجن', 'SHAILA - Leaders in Egg & Poultry Production')}
                    </h1>
                    <p>
                        {t(
                            'نوفر أجود أنواع البيض والدواجن من مزارعنا الحديثة بأعلى معايير الجودة والنظافة',
                            'We provide the finest eggs and poultry from our modern farms with the highest quality and hygiene standards'
                        )}
                    </p>
                    <Link to="/about" className="hero-cta">
                        {t('تعرف علينا', 'Learn More')}
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-container">
                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1538451825199-8605af521e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VsdHJ5JTIwZmFybWluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc1MjY2MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt={t('مزارع شهيلا', 'SHAILA Farms')}
                        />
                    </div>
                    <div className="about-text">
                        <h2>{t('من نحن', 'About Us')}</h2>
                        <p>
                            {t(
                                'شركة شهيلا هي واحدة من الشركات الرائدة في المملكة العربية السعودية في مجال إنتاج البيض وتربية الدواجن. نفخر بخبرتنا الممتدة لأكثر من 25 عامًا في تقديم منتجات عالي الجودة تلبي احتياجات السوق المحلي.',
                                'SHAILA is one of the leading companies in Saudi Arabia in egg production and poultry farming. We pride ourselves on over 25 years of experience in providing high-quality products that meet local market needs.'
                            )}
                        </p>
                        <p>
                            {t(
                                'نستخدم أحدث التقنيات والممارسات الزراعية المستدامة لضمان صحة وسلامة منتجاتنا. مزارعنا مجهزة بأحدث المعدات والتكنولوجيا لضمان أعلى معايير الجودة.',
                                'We use the latest technologies and sustainable farming practices to ensure the health and safety of our products. Our farms are equipped with state-of-the-art equipment and technology to ensure the highest quality standards.'
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="section-container">
                    <h2 className="section-title">{t('لماذا تختار شهيلا', 'Why Choose SHAILA')}</h2>
                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-icon modern-icon icon-success">
                                <MdVerified size={60} color="#4CAF50" />
                            </div>
                            <h3>جودة عالية</h3>
                            <p>منتجات بأعلى معايير الجودة والنظافة</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon modern-icon icon-success">
                                <MdEco size={60} color="#4CAF50" />
                            </div>
                            <h3>مستدام وصحي</h3>
                            <p>ممارسات زراعية مستدامة وصديقة للبيئة</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon modern-icon icon-primary">
                                <MdLocalShipping size={60} color="#4CAF50" />
                            </div>
                            <h3>توصيل سريع</h3>
                            <p>شبكة توزيع واسعة لضمان وصول منتجاتنا طازجة</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon modern-icon icon-success">
                                <MdThumbUp size={60} color="#4CAF50" />
                            </div>
                            <h3>ثقة العملاء</h3>
                            <p>آلاف العملاء يثقون في منتجاتنا يوميًا</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="products-section">
                <div className="section-container">
                    <h2 className="section-title">{t('منتجاتنا', 'Our Products')}</h2>
                    <div className="products-grid">
                        {products.map((product, index) => (
                            <div key={index} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="product-content">
                                    <h3>{product.title}</h3>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/products" className="cta-button">
                            {t('عرض جميع المنتجات', 'View All Products')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Farms Section */}
            <section className="farms-section">
                <div className="section-container">
                    <h2 className="section-title">{t('مزارعنا', 'Our Farms')}</h2>
                    <div className="farms-grid">
                        {farms.map((farm, index) => (
                            <div key={index} className="farm-item">
                                <div className="farm-image">
                                    <img src={farm.image} alt={farm.name} />
                                    <div className="farm-overlay">
                                        <h3>{farm.name}</h3>
                                        <p>{farm.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/farms" className="cta-button">
                            {t('اكتشف مزارعنا', 'Discover Our Farms')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
                <div className="section-container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">25+</div>
                            <div className="stat-label">{t('سنة خبرة', 'Years Experience')}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">50M+</div>
                            <div className="stat-label">{t('بيضة سنويًا', 'Eggs Annually')}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">15</div>
                            <div className="stat-label">{t('مزرعة حديثة', 'Modern Farms')}</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">{t('موظف', 'Employees')}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="locations-section">
                <div className="section-container">
                    <h2 className="section-title">{t('مواقعنا', 'Our Locations')}</h2>
                    <div className="locations-grid">
                        {locations.map((location, index) => (
                            <div key={index} className="location-card">
                                <div className="location-icon modern-icon-large icon-primary">
                                    <MdLocationOn size={60} color="#2196F3" />
                                </div>
                                <h3>{location.city}</h3>
                                <p>{location.address}</p>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta">
                        <Link to="/locations" className="cta-button">
                            {t('عرض جميع المواقع', 'View All Locations')}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

