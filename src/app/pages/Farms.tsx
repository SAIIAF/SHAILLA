import React from 'react';
import { MdApartment, MdThermostat, MdLocalHospital, MdEco, MdLocationPin, MdBarChart } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import './Farms.css';

export const Farms: React.FC = () => {
  const { t } = useLanguage();

  const farms = [
    {
      name: t('مزرعة الرياض الرئيسية', 'Riyadh Main Farm'),
      location: t('الرياض، المنطقة الوسطى', 'Riyadh, Central Region'),
      capacity: t('5 ملايين بيضة شهريًا', '5 million eggs monthly'),
      established: '2001',
      image: 'https://images.unsplash.com/photo-1660444770624-7c11f739735d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbGFuZHNjYXBlJTIwZ3JlZW4lMjBmaWVsZHxlbnwxfHx8fDE3NzUxODY1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('مزرعة جدة', 'Jeddah Farm'),
      location: t('جدة، المنطقة الغربية', 'Jeddah, Western Region'),
      capacity: t('4 ملايين بيضة شهريًا', '4 million eggs monthly'),
      established: '2008',
      image: 'https://images.unsplash.com/photo-1651947368468-ac261dcce643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzUyNjYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('مزرعة الدمام', 'Dammam Farm'),
      location: t('الدمام، المنطقة الشرقية', 'Dammam, Eastern Region'),
      capacity: t('3.5 مليون بيضة شهريًا', '3.5 million eggs monthly'),
      established: '2010',
      image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMHN1c3RhaW5hYmlsaXR5JTIwcnVyYWx8ZW58MXx8fHwxNzc1MjY2MTU1fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('مزرعة القصيم', 'Qassim Farm'),
      location: t('القصيم، المنطقة الوسطى', 'Qassim, Central Region'),
      capacity: t('3 ملايين بيضة شهريًا', '3 million eggs monthly'),
      established: '2012',
      image: 'https://images.unsplash.com/photo-1538451825199-8605af521e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGlja2VuJTIwZmFybSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NTI2NjE1M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('مزرعة الجوف', 'Al-Jouf Farm'),
      location: t('الجوف، المنطقة الشمالية', 'Al-Jouf, Northern Region'),
      capacity: t('2.5 مليون بيضة شهريًا', '2.5 million eggs monthly'),
      established: '2015',
      image: 'https://images.unsplash.com/photo-1660444770624-7c11f739735d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbGFuZHNjYXBlJTIwZ3JlZW4lMjBmaWVsZHxlbnwxfHx8fDE3NzUxODY1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: t('مزرعة عسير', 'Asir Farm'),
      location: t('عسير، المنطقة الجنوبية', 'Asir, Southern Region'),
      capacity: t('2 مليون بيضة شهريًا', '2 million eggs monthly'),
      established: '2018',
      image: 'https://images.unsplash.com/photo-1651947368468-ac261dcce643?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBmYXJtJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzUyNjYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const farmFeatures = [
    {
      title: t('بنية تحتية حديثة', 'Modern Infrastructure'),
      description: t('مزارع مجهزة بأحدث التقنيات والمعدات', 'Farms equipped with the latest technology and equipment'),
      icon: <MdApartment className="modern-icon-large icon-accent" size={50} color="#FF6B6B" />
    },
    {
      title: t('تحكم مناخي متقدم', 'Advanced Climate Control'),
      description: t('أنظمة تحكم دقيقة لضمان بيئة مثالية', 'Precise control systems to ensure an ideal environment'),
      icon: <MdThermostat className="modern-icon-large icon-primary" size={50} color="#1E90FF" />
    },
    {
      title: t('رعاية صحية شاملة', 'Comprehensive Healthcare'),
      description: t('برامج رعاية صحية متكاملة للدواجن', 'Integrated healthcare programs for poultry'),
      icon: <MdLocalHospital className="modern-icon-large icon-success" size={50} color="#28a745" />
    },
    {
      title: t('استدامة بيئية', 'Environmental Sustainability'),
      description: t('ممارسات صديقة للبيئة في جميع العمليات', 'Eco-friendly practices in all operations'),
      icon: <MdEco className="modern-icon-large icon-success" size={50} color="#28a745" />
    }
  ];

  return (
    <div className="farms-page">
      <section className="farms-hero">
        <div className="farms-hero-overlay"></div>
        <div className="farms-hero-content">
          <h1>{t('مزارعنا', 'Our Farms')}</h1>
          <p>{t('شبكة واسعة من المزارع الحديثة عبر المملكة', 'A wide network of modern farms across the Kingdom')}</p>
        </div>
      </section>

      <section className="farm-features">
        <div className="features-container">
          <h2>{t('مميزات مزارعنا', 'Our Farm Features')}</h2>
          <div className="features-grid">
            {farmFeatures.map((feature, index) => (
              <div key={index} className="feature-card">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="farms-locations">
        <div className="locations-container">
          <h2>{t('مواقع مزارعنا', 'Our Farm Locations')}</h2>
          <div className="farms-grid">
            {farms.map((farm, index) => (
              <div key={index} className="farm-location-card">
                <div className="farm-image-container">
                  <img src={farm.image} alt={farm.name} />
                  <div className="farm-established">{t('تأسست', 'Est.')} {farm.established}</div>
                </div>
                <div className="farm-info">
                  <h3>{farm.name}</h3>
                  <p className="farm-location-text">
                    <MdLocationPin className="modern-icon inline mr-2" size={20} color="#FF6B6B" /> {farm.location}
                  </p>
                  <p className="farm-capacity">
                    <MdBarChart className="modern-icon inline mr-2" size={20} color="#1E90FF" /> {farm.capacity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="farm-tech-section">
        <div className="tech-container">
          <h2>{t('التكنولوجيا في مزارعنا', 'Technology in Our Farms')}</h2>
          <div className="tech-content">
            <p>
              {t(
                'نستخدم أحدث التقنيات في إدارة مزارعنا لضمان أعلى مستويات الإنتاجية والجودة. من أنظمة التغذية الأوتوماتيكية إلى أنظمة المراقبة الذكية، كل شيء مصمم لتوفير أفضل بيئة للدواجن.',
                'We use the latest technologies in managing our farms to ensure the highest levels of productivity and quality. From automatic feeding systems to smart monitoring systems, everything is designed to provide the best environment for poultry.'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};