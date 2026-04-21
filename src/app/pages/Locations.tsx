import React, { useState } from 'react';
import { MapPin, Phone, Mail, User, MessageSquare, ChevronRight, ChevronLeft, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

import heroBg from '../../img/3d.png';
import BishaImg from '../../img/bckfarms/4.jpeg';
import TabalahImg from '../../img/bckfarms/1.jpeg';
import JizanImg from '../../img/bckfarms/44.jpeg';
import TaifImg from '../../img/bckfarms/22.jpeg';
import jeddahImg from '../../img/bckfarms/2.jpeg';

import './Locations.css';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Locations: React.FC = () => {
  const { t, dir, isRTL } = useLanguage();
  const cardsRef = useScrollAnimation(0.1);
  const contactRef = useScrollAnimation(0.08);

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const locations = [
    {
      id: 1,
      image: BishaImg,
      city: t('بيشة', 'Bisha'),
      type: t('المقر الرئيسي في بيشة', 'Bisha Main Branch'),
      address: t(
        'بيشة، منطقة عسير، المملكة العربية السعودية',
        'Bisha, Aseer Region, Saudi Arabia'
      ),
      phone: '+966 53 111 7922',
      email: 'social@afaqsaleh.com',
      lat: 19.9974,
      lng: 42.5915,
      mapUrl: "https://www.google.com/maps?q=19.9974,42.5915",
    },
    {
      id: 2,
      image: TabalahImg,
      city: t('تبالة', 'Tabalah'),
      type: t('فرع تبالة التشغيلي', 'Tabalah Operational Branch'),
      address: t(
        'تبالة، منطقة عسير، المملكة العربية السعودية',
        'Tabalah, Aseer Region, Saudi Arabia'
      ),
      phone: '0544131444',
      email: 'social@afaqsaleh.com',
      lat: 20.0000,
      lng: 42.4000,
      mapUrl: "https://www.google.com/maps?q=20.0000,42.4000",
    },
    {
      id: 3,
      image: JizanImg,
      city: t('جيزان', 'Jizan'),
      type: t('فرع جيزان', 'Jizan Branch'),
      address: t(
        'جيزان، المملكة العربية السعودية',
        'Jizan, Saudi Arabia'
      ),
      phone: '+966 53 838 1614',
      email: 'social@afaqsaleh.com',
      lat: 17.1576,
      lng: 42.6741,
      mapUrl: "https://www.google.com/maps?q=17.1576,42.6741",
    },
    {
      id: 4,
      image: TaifImg,
      city: t('الطائف', 'Taif'),
      type: t('فرع الطائف', 'Taif Branch'),
      address: t(
        'الطائف، منطقة مكة المكرمة، المملكة العربية السعودية',
        'Taif, Makkah Region, Saudi Arabia'
      ),
      phone: '+966 50 010 7110',
      email: 'social@afaqsaleh.com',
      lat: 21.2703,
      lng: 40.4158,
      mapUrl: "https://www.google.com/maps?q=21.2703,40.4158",
    },
    {
      id: 5,
      image: jeddahImg,
      city: t('جدة', 'Jeddah'),
      type: t('فرع جدة', 'Jeddah Branch'),
      address: t(
        'جدة، المملكة العربية السعودية',
        'Jeddah, Saudi Arabia'
      ),
      phone: '+966 53 511 1722',
      email: 'social@afaqsaleh.com',
      lat: 21.6094,
      lng: 39.2638,
      mapUrl: "https://www.google.com/maps?q=21.6094,39.2638",
    },
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim())
      newErrors.name = t('الاسم مطلوب', 'Name is required');
    if (!form.email.trim())
      newErrors.email = t('البريد الإلكتروني مطلوب', 'Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t('البريد الإلكتروني غير صالح', 'Invalid email address');
    if (!form.message.trim())
      newErrors.message = t('الرسالة مطلوبة', 'Message is required');
    else if (form.message.trim().length < 20)
      newErrors.message = t('يجب أن تكون الرسالة 20 حرفاً على الأقل', 'Message must be at least 20 characters');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  const mapSrc = `https://www.google.com/maps?q=Saudi%20Arabia&z=6&output=embed`;

  return (
    <div className="loc-page" dir={dir}>

      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="loc-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="loc-hero-overlay" />
        <div className="loc-hero-content">
          <span className="loc-hero-eyebrow loc-hero-anim loc-hero-anim--d1">
            {t('شهيلا', 'Shehaila')}
          </span>
          <h1 className="loc-hero-title loc-hero-anim loc-hero-anim--d2">
            {t('فروع شهيلا', 'Shehaila Locations')}
          </h1>
          <p className="loc-hero-subtitle loc-hero-anim loc-hero-anim--d3">
            {t(
              'تشكل مواقعنا حلقة الوصل بين مزارعنا وشركائنا، حيث نعمل عبر شبكة توزيع تغطي نطاقًا واسعًا لضمان وصول منتجاتنا بسرعة وكفاءة.',
              'Our locations form the vital link between our farms and our partners, operating through an expansive distribution network that ensures our products reach every destination swiftly and efficiently.'
            )}
          </p>
          <div className="loc-hero-divider loc-hero-anim loc-hero-anim--d4" />
        </div>
        <div className="loc-hero-scroll-hint">
          <span />
        </div>
      </section>

      {/* ── Location Cards ───────────────────────────── */}
      <section className="loc-cards-section" ref={cardsRef}>
        <div className="loc-cards-container">
          <div className="loc-section-label animate-on-scroll fade-up">
            {t('المواقع والفروع', 'Branches & Locations')}
          </div>
          <h2 className="loc-section-title animate-on-scroll fade-up delay-1">
            {t('تواجدنا الجغرافي', 'Our Geographic Presence')}
          </h2>
          <p className="loc-section-desc animate-on-scroll fade-up delay-2">
            {t(
              'نفخر بامتلاك شبكة مواقع استراتيجية تمتد عبر أبرز المدن في المملكة العربية السعودية، مما يُمكّننا من تقديم خدمات متميزة وتوصيل منتجاتنا الطازجة في أسرع وقت ممكن.',
              'We are proud of our strategic network of locations spanning the Kingdom\'s most prominent cities, enabling us to deliver exceptional service and fresh products with unmatched speed and reliability.'
            )}
          </p>

          <div className="loc-cards-grid">
            {locations.map((loc, idx) => (
              <article
                key={loc.id}
                className={`loc-card animate-on-scroll fade-up delay-${idx + 1}`}
              >
                <div className="loc-card-image-wrap">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="loc-card-image"
                    loading="lazy"
                  />
                  <div className="loc-card-image-overlay" />
                  <span className="loc-card-badge">{loc.type}</span>
                </div>
                <div className="loc-card-body">
                  <div className="loc-card-city-row">
                    <MapPin className="loc-card-map-pin" size={22} />
                    <h3 className="loc-card-city">{loc.city}</h3>
                  </div>
                  <ul className="loc-card-details">
                    <li className="loc-card-detail-item">
                      <span className="loc-card-detail-icon">
                        <Building2 size={17} />
                      </span>
                      <span className="loc-card-detail-text">{loc.address}</span>
                    </li>
                    <li className="loc-card-detail-item">
                      <span className="loc-card-detail-icon">
                        <Phone size={17} />
                      </span>
                      <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="loc-card-link">
                        {loc.phone}
                      </a>
                    </li>
                    <li className="loc-card-detail-item">
                      <span className="loc-card-detail-icon">
                        <Mail size={17} />
                      </span>
                      <a href={`mailto:${loc.email}`} className="loc-card-link">
                        {loc.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* ── Map Section ─────────────────────────── */}
<section className="loc-map-section">
  <div className="loc-map-container">

    <h2 className="loc-map-title">
      {t('مواقعنا على الخريطة', 'Our Locations on Map')}
    </h2>

    <div className="loc-map-frame">
      <iframe
        title="locations-map"
        src={mapSrc}
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '20px' }}
        loading="lazy"
      />
    </div>

    <div className="loc-map-list">
      {locations.map((loc) => (
        <a
          key={loc.id}
          href={loc.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="loc-map-item"
        >
          <MapPin size={16} />
          <span>{loc.city}</span>
        </a>
      ))}
    </div>

  </div>
</section>


      {/* ── Contact Section ──────────────────────────── */}
      <section className="loc-contact-section" ref={contactRef}>
        <div className="loc-contact-container">

          {/* Left / Info */}
          <div className="loc-contact-info animate-on-scroll fade-right">
            <span className="loc-section-label light">
              {t('نتطلع للتواصل معك', 'We Look Forward to Hearing from You')}
            </span>
            <h2 className="loc-contact-title">
              {t('تواصل معنا بالتفصيل', 'Contact Us in Detail')}
            </h2>
            <p className="loc-contact-desc">
              {t(
                'في شهيلا، نؤمن بأن التواصل الحقيقي مع عملائنا وشركائنا هو أساس بناء علاقات تجارية راسخة ومستدامة. سواء كنت تبحث عن معلومات تفصيلية حول منتجاتنا، أو تسعى للتفاوض على شراكات استراتيجية، أو تحتاج إلى دعم لوجستي متخصص، فإن فريقنا المؤهل يعمل على مدار الساعة للإجابة على استفساراتك وتقديم الحلول الأمثل التي تلائم متطلبات عملك.',
                'At Shehaila, we believe that authentic communication with our clients and partners forms the foundation of enduring and sustainable business relationships. Whether you seek detailed information about our products, wish to negotiate strategic partnerships, or require specialized logistical support, our highly qualified team operates around the clock to address your inquiries and deliver optimal solutions tailored to your business requirements.'
              )}
            </p>

            <div className="loc-contact-details-list">

              {/* EMAIL */}
              <div className="loc-contact-detail-row">
                <a
                  href="mailto:social@afaqsaleh.com"
                  className="loc-contact-icon-wrap"
                  style={{ cursor: 'pointer' }}
                  title="Send Email"
                >
                  <Mail size={20} />
                </a>

                <div>
                  <span className="loc-contact-detail-label">
                    {t('البريد الإلكتروني', 'Email')}
                  </span>

                  <a
                    href="mailto:social@afaqsaleh.com"
                    className="loc-contact-detail-value"
                  >
                    social@afaqsaleh.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="loc-contact-detail-row">
                <a
                  href="tel:920014995"
                  className="loc-contact-icon-wrap"
                  style={{ cursor: 'pointer' }}
                  title="Call Now"
                >
                  <Phone size={20} />
                </a>

                <div>
                  <span className="loc-contact-detail-label">
                    {t('الهاتف', 'Phone')}
                  </span>

                  <a href="tel:920014995" className="loc-contact-detail-value">
                    920014995
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="loc-contact-detail-row">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Riyadh,Saudi%20Arabia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-contact-icon-wrap"
                  style={{ cursor: 'pointer' }}
                  title="Open in Maps"
                >
                  <MapPin size={20} />
                </a>

                <div>
                  <span className="loc-contact-detail-label">
                    {t('المقر الرئيسي', 'Headquarters')}
                  </span>

                  <a
                    href="https://www.google.com/maps?q=19.997407913208008,42.59150695800781&z=17&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="loc-contact-detail-value"
                  >
                    {t('بيشة - المملكة العربية السعودية', 'Bisha, Saudi Arabia')}
                  </a>
                </div>
              </div>
            </div>

            <Link to="/contact" className="loc-cta-btn">
              <span>{t('تواصل معنا', 'Contact Us')}</span>
              <ArrowIcon size={18} className="loc-cta-icon" />
            </Link>
          </div>

          {/* Right / Form */}
          <div className="loc-contact-form-wrap animate-on-scroll fade-left delay-2">
            {submitted ? (
              <div className="loc-form-success">
                <div className="loc-form-success-icon">
                  <Mail size={32} />
                </div>
                <h3>
                  {t('تم إرسال رسالتك بنجاح', 'Your Message Has Been Sent')}
                </h3>
                <p>
                  {t(
                    'شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.',
                    'Thank you for reaching out. Our team will respond to you as soon as possible.'
                  )}
                </p>
                <button
                  className="loc-form-success-btn"
                  onClick={() => setSubmitted(false)}
                >
                  {t('إرسال رسالة أخرى', 'Send Another Message')}
                </button>
              </div>
            ) : (
              <form className="loc-contact-form" onSubmit={handleSubmit} noValidate>
                <h3 className="loc-form-title">
                  {t('أرسل لنا رسالة', 'Send Us a Message')}
                </h3>

                <div className="loc-form-group">
                  <label className="loc-form-label" htmlFor="loc-name">
                    {t('الاسم الكامل', 'Full Name')}
                  </label>
                  <div className="loc-form-input-wrap">
                    <User size={16} className="loc-form-icon" />
                    <input
                      id="loc-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t('أدخل اسمك الكامل', 'Enter your full name')}
                      className={`loc-form-input${errors.name ? ' is-error' : ''}`}
                    />
                  </div>
                  {errors.name && <span className="loc-form-error">{errors.name}</span>}
                </div>

                <div className="loc-form-group">
                  <label className="loc-form-label" htmlFor="loc-email">
                    {t('البريد الإلكتروني', 'Email Address')}
                  </label>
                  <div className="loc-form-input-wrap">
                    <Mail size={16} className="loc-form-icon" />
                    <input
                      id="loc-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t('أدخل بريدك الإلكتروني', 'Enter your email address')}
                      className={`loc-form-input${errors.email ? ' is-error' : ''}`}
                    />
                  </div>
                  {errors.email && <span className="loc-form-error">{errors.email}</span>}
                </div>

                <div className="loc-form-group">
                  <label className="loc-form-label" htmlFor="loc-message">
                    {t('الرسالة', 'Message')}
                  </label>
                  <div className="loc-form-input-wrap loc-form-textarea-wrap">
                    <MessageSquare size={16} className="loc-form-icon loc-form-icon--top" />
                    <textarea
                      id="loc-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={t(
                        'اكتب رسالتك هنا بالتفصيل...',
                        'Write your message here in detail...'
                      )}
                      className={`loc-form-input loc-form-textarea${errors.message ? ' is-error' : ''}`}
                    />
                  </div>
                  {errors.message && <span className="loc-form-error">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`loc-form-submit${submitting ? ' is-loading' : ''}`}
                  disabled={submitting}
                >
                  {submitting
                    ? t('جارٍ الإرسال...', 'Sending...')
                    : t('إرسال الرسالة', 'Send Message')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
