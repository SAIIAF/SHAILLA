import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';
import heroImg from '../../img/bckfarms/3.jpeg';
import logoImg from '../../img/bckfarms/لوجو مزارع شهيلا.jpg';

import production1 from '../../img/bckfarms/6.jpeg';
import production2 from '../../img/bckfarms/55.jpeg';

import fleet1 from '../../img/bckfarms/111.jpeg';
import fleet2 from '../../img/bckfarms/222.jpeg';

import savolaLogo from '../../img/bckfarms/clients/alrayalogo.jpg';
import nadecLogo from '../../img/bckfarms/clients/bandalogo-1536x1086.jpg';
import pandaLogo from '../../img/bckfarms/clients/bindawood.jpg';
import tamimiLogo from '../../img/bckfarms/clients/Danublogo.jpg';
import carrefourLogo from '../../img/bckfarms/clients/farmlogo.jpg';
import luluLogo from '../../img/bckfarms/clients/Othaimlogo-1152x1536.png';
import othaimLogo from '../../img/bckfarms/clients/sanabellogo.png';

const HERO_IMAGE = heroImg;
const LOGO_PLACEHOLDER = logoImg;
const PRODUCTION_IMAGES = [
  production1,
  production2,
];

const FLEET_IMAGES = [
  fleet1,
  fleet2,
];
const PARTNER_LOGOS = [
  { id: 1, name: 'Savola', logo: savolaLogo },
  { id: 2, name: 'NADEC', logo: nadecLogo },
  { id: 3, name: 'Panda', logo: pandaLogo },
  { id: 4, name: 'Tamimi', logo: tamimiLogo },
  { id: 5, name: 'Carrefour', logo: carrefourLogo },
  { id: 6, name: 'Lulu', logo: luluLogo },
  { id: 7, name: 'Othaim', logo: othaimLogo },
];

const SectionReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
}> = ({ children, className = '', animation = 'fade-up', delay = 0 }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal--${animation} ${isVisible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const About: React.FC = () => {
  const { t, lang } = useLanguage();

  const aboutTextAr = `
    شهيلا شركة سعودية رائدة في صناعة إنتاج البيض والدواجن، تأسست عام 2001 على أيدي مجموعة من المهندسين
    والخبراء الزراعيين الطموحين الذين آمنوا بأن المستهلك السعودي يستحق أجود المنتجات الغذائية وأكثرها
    أمانًا وطازجيةً.

    على مدار أكثر من ربع قرن من العطاء والإبداع، تمكّنت شهيلا من تحويل مزرعة صغيرة متواضعة إلى منظومة
    إنتاجية متكاملة تضم خمسة مزارع حديثة موزّعة استراتيجيًا في أرجاء المملكة العربية السعودية، تعمل
    وفق أعلى معايير الجودة والسلامة الغذائية الدولية المعتمدة.

    تستثمر شهيلا في أحدث التقنيات الزراعية والبيطرية، حيث تعتمد على أنظمة تربية مُحكمة البيئة تضمن
    رفاهية الطيور وصحتها على أكمل وجه، مما ينعكس مباشرةً على جودة المنتجات وقيمتها الغذائية العالية التي
    يثق بها ملايين العملاء يوميًا. يضم فريقنا أكثر من خمسمائة متخصص في مجالات الزراعة والبيطرة وضبط
    الجودة والخدمات اللوجستية، يعملون بتناسق تام وشغف حقيقي لضمان وصول المنتج الطازج إلى المستهلك في
    أسرع وقت ممكن وبأعلى مستوى من النقاء.

  `;

  const aboutTextEn = `
    Shehaila is a leading Saudi company in the egg and poultry production industry, established in 2001 by a
    group of ambitious agricultural engineers and experts who firmly believed that Saudi consumers deserve the
    finest, safest, and freshest food products available on the market.

    Over more than a quarter century of excellence and innovation, Shehaila has transformed a modest small farm
    into a fully integrated production ecosystem comprising five modern farms strategically distributed
    across the Kingdom of Saudi Arabia, all operating to the highest international standards of quality and
    food safety.

    Shehaila continuously invests in the most advanced agricultural and veterinary technologies, relying on
    climate-controlled breeding systems that ensure the highest levels of bird welfare and health, which
    directly reflects on the quality and nutritional value of its products — trusted by millions of customers
    every single day. Our team includes over five hundred specialists in agriculture, veterinary science,
    quality control, and logistics, working in seamless coordination and with genuine passion to ensure fresh
    products reach consumers as quickly as possible at the highest standard of purity.


  `;

  
  const productionTextAr = `
    تمتلك شهيلا خط إنتاج متكامل ومتطور يمثل الركيزة الأساسية لتميزنا في السوق. يبدأ الخط من مراحل
    التفريخ الآلي الدقيق، مرورًا بمحطات التربية المُتحكم بيئتها حراريًا وهوائيًا، وصولًا إلى خطوط
    الفرز والتعبئة الأوتوماتيكية التي تضمن سلامة المنتج وجودته حتى لحظة تسليمه للمستهلك. تعتمد كل
    مرحلة على برامج رقابة صارمة تخضع للتدقيق الدوري من جهات معتمدة محليًا ودوليًا، مما يجعل شهيلا
    معيارًا للثقة والجودة في القطاع الغذائي السعودي.
  `;

  const productionTextEn = `
    Shehaila operates a fully integrated and sophisticated production line that represents the cornerstone of
    our market distinction. The process begins with precision automated hatchery stages, moves through
    thermally and ventilation-controlled rearing stations, and culminates in fully automated sorting and
    packaging lines that guarantee product safety and quality until the moment of consumer delivery. Every
    stage is governed by strict monitoring programs subject to periodic audits by locally and internationally
    accredited bodies, making Shehaila the benchmark for trust and quality in the Saudi food sector.
  `;

  const fleetTextAr = `
    لضمان وصول منتجاتنا الطازجة في أعلى حالة من الجودة، يمتلك شهيلا أسطول توزيع متطور يضم مئات
    المركبات المبردة المجهزة بأنظمة تتبع لحظية ومراقبة درجات الحرارة عبر الوقت الفعلي. يغطي الأسطول
    جميع مناطق المملكة العربية السعودية الكبرى والمتوسطة والصغيرة، محققًا معدلات تسليم تتجاوز 99%
    في المواعيد المحددة. يخضع الأسطول لبرنامج صيانة استباقي دوري لضمان الكفاءة القصوى، كما تلتزم
    مركباتنا بأعلى معايير البيئة والسلامة المرورية تجسيدًا لمسؤوليتنا تجاه المجتمع والكوكب.
  `;

  const fleetTextEn = `
    To ensure our fresh products arrive in the highest possible quality condition, Shehaila operates an
    advanced distribution fleet comprising hundreds of refrigerated vehicles equipped with real-time tracking
    systems and live temperature monitoring. The fleet covers all major, mid-size, and small regions across
    the Kingdom of Saudi Arabia, achieving on-time delivery rates exceeding 99%. Our fleet undergoes a
    proactive periodic maintenance program to ensure peak efficiency, and all vehicles comply with the highest
    environmental and road safety standards — a testament to our responsibility toward society and the planet.
  `;

  return (
    <main className="shehaila-about__page">
      {/* ── HERO ── */}
      <section
        className="shehaila-about__hero"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-label={t('قسم التعريف', 'Hero Section')}
      >
        <div className="shehaila-about__hero-overlay" />
        <div className="shehaila-about__hero-content">
          <h1 className="shehaila-about__hero-title">{t('من نحن', 'About Us')}</h1>
          <p className="shehaila-about__hero-sub">
            {t(
              'نحن شهيلا — علامة سعودية أصيلة تجمع بين عراقة الماضي وطموح المستقبل، لنقدم لكم أجود منتجات البيض والدواجن بمعايير عالمية وبلمسة محلية لا تُضاهى.',
              'We are Shehaila — an authentic Saudi brand that bridges the heritage of the past with the ambitions of the future, delivering the finest egg and poultry products to world-class standards with an unmatched local touch.'
            )}
          </p>
        </div>
        <div className="shehaila-about__hero-scroll-hint" aria-hidden="true">
          <span className="shehaila-about__hero-scroll-line" />
        </div>
      </section>

      {/* ── ABOUT SHEHAILA ── */}
      <section className="shehaila-about__section shehaila-about__identity" aria-labelledby="identity-title">
        <div className="shehaila-about__container">
          <SectionReveal animation="fade-up">
            <div className="shehaila-about__section-tag">{t('تعرف علينا', 'Get to Know Us')}</div>
            <h2 id="identity-title" className="shehaila-about__section-title">
              {t('عن شهيلا', 'About Shehaila')}
            </h2>
          </SectionReveal>

          <div className={`shehaila-about__identity-grid ${lang === 'en' ? 'shehaila-about__identity-grid--ltr' : ''}`}>
            <SectionReveal
              animation={lang === 'ar' ? 'slide-right' : 'slide-left'}
              className="shehaila-about__identity-text-col"
            >
              {(lang === 'ar' ? aboutTextAr : aboutTextEn)
                .trim()
                .split('\n\n')
                .map((para, i) => (
                  <p key={i} className="shehaila-about__body-text">
                    {para.trim()}
                  </p>
                ))}
            </SectionReveal>

            <SectionReveal
              animation={lang === 'ar' ? 'slide-left' : 'slide-right'}
              delay={150}
              className="shehaila-about__identity-logo-col"
            >
              <div className="shehaila-about__logo-frame">
                <img
                  src={LOGO_PLACEHOLDER}
                  alt={t('شهيلا — صورة الشركة', 'Shehaila Company Image')}
                  className="shehaila-about__logo-img"
                  loading="lazy"
                />
                <div className="shehaila-about__logo-badge">
                  <span className="shehaila-about__logo-badge-year">2001</span>
                  <span className="shehaila-about__logo-badge-label">{t('تأسيس', 'Est.')}</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── PRODUCTION LINE ── */}
      <section className="shehaila-about__section shehaila-about__production" aria-labelledby="production-title">
        <div className="shehaila-about__container">
          <SectionReveal animation="fade-up">
            <div className="shehaila-about__section-tag">{t('بنيتنا التحتية', 'Our Infrastructure')}</div>
            <h2 id="production-title" className="shehaila-about__section-title shehaila-about__section-title--light">
              {t('خط إنتاج متكامل', 'Integrated Production Line')}
            </h2>
          </SectionReveal>

          <SectionReveal animation="fade-up" delay={100}>
            <p className="shehaila-about__body-text shehaila-about__body-text--centered shehaila-about__body-text--light">
              {lang === 'ar' ? productionTextAr.trim() : productionTextEn.trim()}
            </p>
          </SectionReveal>

          <div className="shehaila-about__image-grid">
            {PRODUCTION_IMAGES.map((src, i) => (
              <SectionReveal key={i} animation="fade-up" delay={i * 180} className="shehaila-about__image-card-wrap">
                <div className="shehaila-about__image-card">
                  <img
                    src={src}
                    alt={t(`خط الإنتاج ${i + 1}`, `Production Line ${i + 1}`)}
                    className="shehaila-about__image-card-img"
                    loading="lazy"
                  />
                  <div className="shehaila-about__image-card-overlay">
                    <span className="shehaila-about__image-card-label">
                      {i === 0
                        ? t('مرحلة التفريخ والتربية', 'Hatching & Rearing Stage')
                        : t('خطوط الفرز والتعبئة', 'Sorting & Packaging Lines')}
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISTRIBUTION FLEET ── */}
      <section className="shehaila-about__section shehaila-about__fleet" aria-labelledby="fleet-title">
        <div className="shehaila-about__container">
          <SectionReveal animation="fade-up">
            <div className="shehaila-about__section-tag">{t('شبكة التوزيع', 'Distribution Network')}</div>
            <h2 id="fleet-title" className="shehaila-about__section-title">
              {t('أسطول توزيع متطور', 'Advanced Distribution Fleet')}
            </h2>
          </SectionReveal>

          <SectionReveal animation="fade-up" delay={100}>
            <p className="shehaila-about__body-text shehaila-about__body-text--centered">
              {lang === 'ar' ? fleetTextAr.trim() : fleetTextEn.trim()}
            </p>
          </SectionReveal>

          <div className="shehaila-about__image-grid">
            {FLEET_IMAGES.map((src, i) => (
              <SectionReveal key={i} animation="fade-up" delay={i * 180} className="shehaila-about__image-card-wrap">
                <div className="shehaila-about__image-card">
                  <img
                    src={src}
                    alt={t(`أسطول التوزيع ${i + 1}`, `Distribution Fleet ${i + 1}`)}
                    className="shehaila-about__image-card-img"
                    loading="lazy"
                  />
                  <div className="shehaila-about__image-card-overlay">
                    <span className="shehaila-about__image-card-label">
                      {i === 0
                        ? t('مركبات التبريد المتطورة', 'Advanced Refrigerated Vehicles')
                        : t('التغطية الشاملة للمملكة', 'Nationwide Coverage')}
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section
        className="shehaila-about__section shehaila-about__partners"
        aria-labelledby="partners-title"
      >
        <div className="shehaila-about__container">
          <SectionReveal animation="fade-up">
            <div className="shehaila-about__section-tag">
              {t('الشبكة التجارية', 'Commercial Network')}
            </div>

            <h2
              id="partners-title"
              className="shehaila-about__section-title shehaila-about__section-title--light"
            >
              {t('شركاؤنا', 'Our Partners')}
            </h2>

            <p className="shehaila-about__body-text shehaila-about__body-text--centered shehaila-about__body-text--light shehaila-about__partners-intro">
              {t(
                'نفخر بشراكاتنا الاستراتيجية مع كبرى سلاسل التجزئة والموزعين في المملكة، مما يضمن وصول منتجاتنا إلى كل بيت وكل طاولة.',
                "We take pride in our strategic partnerships with the Kingdom's leading retail chains and distributors, ensuring our products reach every home and every table."
              )}
            </p>
          </SectionReveal>

          <div className="shehaila-about__partners-grid">
            {PARTNER_LOGOS.map((p, i) => (
              <SectionReveal
                key={p.id}
                animation="fade-up"
                delay={i * 60}
                className="shehaila-about__partner-wrap"
              >
                <div className="shehaila-about__partner-card">
                  <div className="shehaila-about__partner-inner">

                    {/* 👇 أهم تعديل هنا */}
                    <div className="shehaila-about__partner-logo-wrapper">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="shehaila-about__partner-logo"
                      />
                    </div>

                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
