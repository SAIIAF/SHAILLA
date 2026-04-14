import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import contactHero from '../../img/bckfarms/44.jpeg';
import './Contact.css';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = t('يرجى إدخال الاسم الكامل', 'Please enter your full name');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('يرجى إدخال البريد الإلكتروني', 'Please enter your email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('يرجى إدخال بريد إلكتروني صحيح', 'Please enter a valid email');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('يرجى إدخال رسالتك', 'Please enter your message');
    } else if (formData.message.trim().length < 20) {
      newErrors.message = t('يجب أن تكون الرسالة 20 حرفًا على الأقل', 'Message must be at least 20 characters');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSuccess(true);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="contact-page">
      {/* Language Toggle */}
      <button className="lang-toggle" onClick={toggleLanguage}>
        {language === 'ar' ? 'English' : 'العربية'}
      </button>

      {/* Hero Section */}
      <section className="contact-hero">
        <img src={contactHero} alt="" className="contact-hero-bg" width={1920} height={1080} />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>{t('تواصل معنا', 'Contact Us')}</h1>
          <p>
            {t(
              'نسعد بتواصلكم معنا في شهيلا. فريقنا المتخصص جاهز لتقديم الدعم والإجابة على جميع استفساراتكم بأعلى مستوى من الاحترافية والاهتمام، لنبني معًا شراكة قائمة على الثقة والتميز.',
              'We are delighted to hear from you at Shehaila. Our dedicated team is ready to provide support and answer all your inquiries with the highest level of professionalism and care, building a partnership founded on trust and excellence.'
            )}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Form Card */}
          <div className="contact-form-card">
            <h2>{t('أرسل لنا رسالة', 'Send Us a Message')}</h2>

            {isSuccess ? (
              <div className="success-state">
                <div className="success-icon">
                  <CheckCircle size={40} />
                </div>
                <h3>{t('تم إرسال رسالتك بنجاح!', 'Message Sent Successfully!')}</h3>
                <p>
                  {t(
                    'شكرًا لتواصلك مع شهيلا. سيقوم فريقنا بمراجعة رسالتك والرد عليك في أقرب وقت ممكن خلال أيام العمل الرسمية.',
                    'Thank you for reaching out to Shehaila. Our team will review your message and respond to you as soon as possible during official working days.'
                  )}
                </p>
                <button onClick={resetForm}>
                  {t('إرسال رسالة أخرى', 'Send Another Message')}
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label>{t('الاسم الكامل', 'Full Name')} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('أدخل اسمك الكامل', 'Enter your full name')}
                    className={errors.name ? 'input-error' : ''}
                    maxLength={100}
                  />
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label>{t('البريد الإلكتروني', 'Email Address')} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('أدخل بريدك الإلكتروني', 'Enter your email address')}
                    className={errors.email ? 'input-error' : ''}
                    maxLength={255}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label>{t('الموضوع', 'Subject')}</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}>
                    <option value="">{t('اختر الموضوع', 'Select Subject')}</option>
                    <option value="general">{t('استفسار عام', 'General Inquiry')}</option>
                    <option value="products">{t('استفسار عن المنتجات', 'Product Inquiry')}</option>
                    <option value="partnership">{t('فرص الشراكة', 'Partnership Opportunities')}</option>
                    <option value="complaint">{t('شكوى', 'Complaint')}</option>
                    <option value="other">{t('أخرى', 'Other')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>{t('رسالتك', 'Your Message')} *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('اكتب رسالتك هنا (20 حرفًا على الأقل)', 'Write your message here (at least 20 characters)')}
                    className={errors.message ? 'input-error' : ''}
                    maxLength={1000}
                  />
                  {errors.message && <p className="error-text">{errors.message}</p>}
                </div>

                <button type="submit" className="submit-button" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <span className="spinner" />
                      {t('جاري الإرسال...', 'Sending...')}
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {t('إرسال الرسالة', 'Send Message')}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Card */}
          <div className="contact-info-card">
            <h2>{t('معلومات التواصل', 'Contact Information')}</h2>

            <div className="info-item">
              <div className="info-icon icon-primary"><MapPin size={24} /></div>
              <div className="info-content">
                <h4>{t('العنوان', 'Address')}</h4>
                <p>{t('منطقة بيشه، المملكة العربية السعودية', 'bisha Region, Saudi Arabia')}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon icon-success"><Phone size={24} /></div>
              <div className="info-content">
                <h4>{t('الهاتف', 'Phone')}</h4>
                <p style={{ direction: 'ltr', textAlign: language === 'ar' ? 'right' : 'left' }}>920014995</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon icon-accent"><Mail size={24} /></div>
              <div className="info-content">
                <h4>{t('البريد الإلكتروني', 'Email')}</h4>
                <p>social@afaqsaleh.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon icon-warning"><Clock size={24} /></div>
              <div className="info-content">
                <h4>{t('ساعات العمل', 'Working Hours')}</h4>
                <p>{t('السبت - الخميس: 8:00 ص - 5:00 م', 'Saturday - Thursday: 8:00 AM - 5:00 PM')}</p>
              </div>
            </div>

            <div className="social-links">
              <h4>{t('تابعنا', 'Follow Us')}</h4>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={22} /></a>
                <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={22} /></a>
                <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={22} /></a>
                <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={22} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>{t('هل لديك استفسار عاجل؟', 'Have an Urgent Inquiry?')}</h2>
          <p>
            {t(
              'يمكنك التواصل معنا مباشرة عبر الواتساب للحصول على رد فوري من فريقنا المتخصص في خدمة العملاء.',
              'You can reach us directly via WhatsApp for an immediate response from our dedicated customer service team.'
            )}
          </p>
          <a
            href="https://wa.me/966112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <Phone size={22} />
            {t('تواصل معنا الآن', 'Contact Us Now')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
