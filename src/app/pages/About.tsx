import React from 'react';
import { MdVisibility, MdOutlineLightbulb } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>{t('من نحن', 'About Us')}</h1>
          <p>{t('تعرف على قصتنا ورؤيتنا ورسالتنا', 'Learn about our story, vision, and mission')}</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-container">
          <h2>{t('قصتنا', 'Our Story')}</h2>
          <p>
            {t(
              'تأسست شركة شهيلا في عام 2001 بهدف توفير أجود أنواع البيض والدواجن للسوق السعودي. بدأنا بمزرعة صغيرة وحلم كبير - أن نصبح الخيار الأول للعائلات السعودية عندما يتعلق الأمر بالبيض الطازج والدواجن عالية الجودة.',
              'SHAILA was founded in 2001 with the goal of providing the finest eggs and poultry to the Saudi market. We started with a small farm and a big dream - to become the first choice for Saudi families when it comes to fresh eggs and high-quality poultry.'
            )}
          </p>
          <p>
            {t(
              'على مدار أكثر من 25 عامًا، نمت شركتنا لتشمل 15 مزرعة حديثة عبر المملكة، ونوظف أكثر من 500 موظف متخصص. نحن نفخر بالتزامنا بالجودة والاستدامة وخدمة العملاء.',
              'Over the past 25+ years, our company has grown to include 15 modern farms across the Kingdom, employing over 500 specialized staff. We pride ourselves on our commitment to quality, sustainability, and customer service.'
            )}
          </p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="vision-mission-container">
          <div className="vision-box">
            <div className="box-icon modern-icon-large icon-primary">
              <MdVisibility />
            </div>            <h3>{t('رؤيتنا', 'Our Vision')}</h3>
            <p>
              {t(
                'أن نكون الشركة الرائدة في إنتاج البيض والدواجن في منطقة الشرق الأوسط، ملتزمين بأعلى معايير الجودة والاستدامة.',
                'To be the leading company in egg and poultry production in the Middle East, committed to the highest standards of quality and sustainability.'
              )}
            </p>
          </div>
          <div className="mission-box">
            <div className="box-icon modern-icon-large icon-success">
              <MdOutlineLightbulb />
            </div>
            <h3>{t('رسالتنا', 'Our Mission')}</h3>
            <p>
              {t(
                'توفير منتجات غذائية عالية الجودة وآمنة وصحية لعملائنا، مع الحفاظ على البيئة وتطوير مجتمعاتنا.',
                'To provide high-quality, safe, and healthy food products to our customers, while preserving the environment and developing our communities.'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="company-timeline">
        <div className="timeline-container">
          <h2>{t('رحلتنا عبر الزمن', 'Our Journey Through Time')}</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2001</div>
              <div className="timeline-content">
                <h4>{t('التأسيس', 'Foundation')}</h4>
                <p>{t('بداية رحلتنا بمزرعة صغيرة في الرياض', 'Started our journey with a small farm in Riyadh')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-content">
                <h4>{t('التوسع', 'Expansion')}</h4>
                <p>{t('افتتاح 5 مزارع جديدة في مناطق مختلفة', 'Opened 5 new farms in different regions')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h4>{t('الابتكار', 'Innovation')}</h4>
                <p>{t('تطبيق أحدث التقنيات في مزارعنا', 'Implemented the latest technologies in our farms')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>{t('الاستدامة', 'Sustainability')}</h4>
                <p>{t('الحصول على شهادات الاستدامة البيئية', 'Received environmental sustainability certifications')}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2026</div>
              <div className="timeline-content">
                <h4>{t('القيادة', 'Leadership')}</h4>
                <p>{t('أصبحنا من أكبر منتجي البيض في المملكة', 'Became one of the largest egg producers in the Kingdom')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="values-container">
          <h2>{t('قيمنا', 'Our Values')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <h4>{t('الجودة', 'Quality')}</h4>
              <p>{t('الالتزام بأعلى معايير الجودة في كل ما نفعله', 'Commitment to the highest quality standards in everything we do')}</p>
            </div>
            <div className="value-card">
              <h4>{t('النزاهة', 'Integrity')}</h4>
              <p>{t('الشفافية والصدق في تعاملاتنا مع الجميع', 'Transparency and honesty in our dealings with everyone')}</p>
            </div>
            <div className="value-card">
              <h4>{t('الابتكار', 'Innovation')}</h4>
              <p>{t('السعي المستمر للتطوير والتحسين', 'Continuous pursuit of development and improvement')}</p>
            </div>
            <div className="value-card">
              <h4>{t('المسؤولية', 'Responsibility')}</h4>
              <p>{t('المسؤولية تجاه عملائنا والبيئة والمجتمع', 'Responsibility towards our customers, environment, and society')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

